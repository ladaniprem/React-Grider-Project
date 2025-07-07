import 'leaflet/dist/leaflet.css';
import type { Place } from '../api/Place';
import type {Map as LeafletMap} from 'leaflet';
import { useEffect,useRef } from 'react';
import { MapContainer,TileLayer,Marker } from 'react-leaflet';
interface MapProps {
  Place: Place | null;
}
function Map({ Place }: MapProps) {
  return (
    <div className="perspective-1000 transition-all duration-500 ease-in-out transform hover:shadow-xl">
        {Place && (
          <div className="animate-pulse transition-all duration-500 ease-out transform 
                         hover:scale-105 hover:shadow-2xl hover:rotate-3d-6
                         motion-safe:animate-fadeIn
                         group perspective-1000 relative">
            <h3 className="animate-bounce text-xl font-bold 
                          transition-all duration-300
                          hover:text-blue-600
                          group-hover:translate-z-10
                          transform-style-3d">
              {Place.name}
            </h3>
            {/* <p>{Place.description}</p> */}
          </div>
        )}
    </div>
  )
}

export default Map
