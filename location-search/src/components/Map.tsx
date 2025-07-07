import 'leaflet/dist/leaflet.css';
import type { Place } from '../api/Place';
import type {Map as LeafletMap} from 'leaflet';
import { useRef, useEffect } from 'react';
import { MapContainer,TileLayer,Marker } from 'react-leaflet';

interface MapProps {
  Place: Place | null;
}
function Map({ Place }: MapProps) {
const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && Place) {
      mapRef.current.setView([Place.latitude, Place.longitude]);
      mapRef.current.invalidateSize();
    }
  }, [Place]);

  return (
    <div className="perspective-1000 transition-all duration-500 ease-in-out transform hover:shadow-xl max-w-4xl mx-auto">
      <MapContainer
        ref={mapRef}
        center={[Place?.latitude || 0, Place?.longitude || 0]}
        zoom={13}
        className="h-[calc(100vh-200px)] w-full rounded-lg shadow-lg transition-transform duration-500 ease ml-auto mr-0
        hover:scale-[1.02] hover:shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Place && (
          <Marker
            position={[Place.latitude, Place.longitude]}
            interactive={false}
          />
        )}
      </MapContainer>
      {Place && (
        <div className="animate-pulse transition-all duration-500 ease-out transform 
                      hover:scale-105 hover:shadow-2xl hover:rotate-3d-6
                      motion-safe:animate-fadeIn
                      group perspective-1000 relative mt-4 text-center">
          <h3 className="animate-bounce text-xl font-bold 
                        transition-all duration-300
                        hover:text-blue-600
                        group-hover:translate-z-10
                        transform-style-3d">
            {Place.name}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Map;
