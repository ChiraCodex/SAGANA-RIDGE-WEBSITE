"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Next.js/Leaflet
const setupLeafletIcons = () => {
  // Only run on client
  if (typeof window === "undefined") return;
  // @ts-ignore - Leaflet typings don't include _getIconUrl
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
};

setupLeafletIcons();

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
  /** When true, shows a floating "Locate me" button */
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
  center = [-0.7050556228838573, 37.2051279116434], // Sagana-Ridge, Kenya (approx)
  zoom = 13,
  markers = [
    {
      id: "sagana-ridge",
      position: [-0.7050556228838573, 37.2051279116434],
      title: "Sagana Ridge",
      description: "Proposed site location (approximate).",
    },
  ],
  locateControl = true,
}: InteractiveMapProps) {
  const [dynamicMarkers, setDynamicMarkers] = useState<MapMarker[]>(markers);
  const mapRef = useRef<L.Map | null>(null);

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
      (res) => {
        const { latitude, longitude } = res.coords;
        const latlng: [number, number] = [latitude, longitude];
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
      () => {
        // optionally handle error
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Memoize center to avoid re-renders
  const mapCenter = useMemo(() => center, [center]);

  return (
    <div className={"relative w-full h-[70vh] rounded-2xl overflow-hidden " + (className ?? "") }>
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
        scrollWheelZoom
        className="w-full h-full"
        whenReady={({ target: map }: { target: L.Map }) => {
          mapRef.current = map;
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
                {m.description && <p className="text-sm text-neutral-700">{m.description}</p>}
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
