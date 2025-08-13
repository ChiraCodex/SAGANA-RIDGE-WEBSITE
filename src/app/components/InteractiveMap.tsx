"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapMarker = {
  id: string | number;
  position: [number, number]; // [lat, lng]
  title?: string;
  description?: string;
};

export type InteractiveMapProps = {
  className?: string;
  center?: [number, number];
  zoom?: number;
  markers?: MapMarker[];
  locateControl?: boolean;
};

function ClickMarker({ onAdd }: { onAdd: (pos: [number, number]) => void }) {
  useMapEvents({
    click(e) {
      onAdd([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function InteractiveMap({
  className,
  center = [-0.7050556228838573, 37.2051279116434],
  zoom = 13,
  markers = [
    {
      id: "sagana-ridge",
      position: [-0.7050556228838573, 37.2051279116434],
      title: "Sagana Ridge",
      description: "Sagana Ridge Project Site (exact).",
    },
  ],
  locateControl = true,
}: InteractiveMapProps) {
  const [isClient, setIsClient] = useState(false); // track client-only
  const [dynamicMarkers, setDynamicMarkers] = useState<MapMarker[]>(markers);
  const mapRef = useRef<L.Map | null>(null);

  // Ensure Leaflet icons are only set on the client
  useEffect(() => {
    setIsClient(true);
    if (typeof window === "undefined") return;

    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  const handleAddMarker = (pos: [number, number]) => {
    const id = `${pos[0].toFixed(5)},${pos[1].toFixed(5)}`;
    setDynamicMarkers((prev) => [
      ...prev,
      { id, position: pos, title: "Dropped pin", description: "Custom marker" },
    ]);
  };

  const handleLocate = () => {
    if (!navigator.geolocation || !mapRef.current) return;
    navigator.geolocation.getCurrentPosition(
  (res: GeolocationPosition) => {
    const latlng: [number, number] = [
      res.coords.latitude,
      res.coords.longitude,
    ];
    mapRef.current!.flyTo(latlng, 15);
    setDynamicMarkers((prev) => [
      ...prev,
      {
        id: "you-are-here",
        position: latlng,
        title: "You are here",
        description: new Date().toLocaleString(),
      },
    ]);
  },
  () => {},
  { enableHighAccuracy: true, timeout: 8000 }
);

  };

  const mapCenter = useMemo(() => center, [center]);

  // Render only on the client
  if (!isClient) return null;

  return (
    <div
      className={`relative w-full h-[70vh] rounded-2xl overflow-hidden ${
        className ?? ""
      }`}
    >
      {locateControl && (
        <button
          onClick={handleLocate}
          className="absolute z-[1000] right-3 top-3 rounded-2xl px-3 py-2 shadow-md bg-accent-orange hover:bg-brand-primary backdrop-blur text-sm font-medium"
        >
          Locate me
        </button>
      )}

      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        ref={(map) => {
          if (map) mapRef.current = map;
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {dynamicMarkers.map((m) => (
          <Marker key={m.id} position={m.position}>
            <Popup>
              <div className="space-y-1">
                {m.title && <h4 className="font-semibold">{m.title}</h4>}
                {m.description && (
                  <p className="text-sm text-neutral-700">{m.description}</p>
                )}
                <code className="text-xs block opacity-70">
                  {m.position[0].toFixed(5)}, {m.position[1].toFixed(5)}
                </code>
              </div>
            </Popup>
          </Marker>
        ))}

        <ClickMarker onAdd={handleAddMarker} />
      </MapContainer>
    </div>
  );
}
