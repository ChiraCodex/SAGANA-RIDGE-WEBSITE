"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L, { LeafletMouseEvent } from "leaflet";
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

// Component for adding markers by clicking the map
function ClickMarker({ onAdd }: { onAdd: (pos: [number, number]) => void }) {
  useMapEvents({
    click(e: LeafletMouseEvent) {
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
      title: "Sagana Ridge ",
      description: "Sagana Ridge Location",
    },
  ],
  locateControl = true,
}: InteractiveMapProps) {
  const [dynamicMarkers, setDynamicMarkers] = useState<MapMarker[]>(markers);
  const mapRef = useRef<L.Map | null>(null);

  // Set up default Leaflet marker icons (only runs on client)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fix marker icons
    const IconProto = L.Icon.Default.prototype as typeof L.Icon.Default.prototype;
    delete IconProto._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  const handleAddMarker = useCallback((pos: [number, number]) => {
    const id = `${pos[0].toFixed(5)},${pos[1].toFixed(5)}`;
    setDynamicMarkers((prev) => [
      ...prev,
      { id, position: pos, title: "Dropped pin", description: "Custom marker" },
    ]);
  }, []);

  const handleLocate = () => {
    if (typeof navigator === "undefined" || !mapRef.current) return;

    navigator.geolocation.getCurrentPosition(
      (res: GeolocationPosition) => {
        const latlng: [number, number] = [
          res.coords.latitude,
          res.coords.longitude,
        ];
        mapRef.current?.flyTo(latlng, 15);
        setDynamicMarkers((prev) => [
          ...prev,
          {
            id: "you-are-here",
            position: latlng,
            title: "You are Here",
            description: new Date().toLocaleString(),
          },
        ]);
      },
      (err) => {
        console.error("Geolocation error:", err.message);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const mapCenter = useMemo(() => center, [center]);

  return (
    <div
      className={`relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden ${
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
        whenReady={(mapInstance: L.Map | null) => {
          mapRef.current = mapInstance;
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
