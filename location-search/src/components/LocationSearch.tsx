import type { Place } from '../api/Place';
import { useState } from "react";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({onPlaceClick}: LocationSearchProps) => {
  const [Places,setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");
  const handleSubmit = async (event : React.FormEvent<HTMLFormElement> ) => {
   event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold text-lg" htmlFor="term">
         Search Location:
        </label>
        <input 
          id="location-search"
          title="Search for a location"
          placeholder="Enter a location"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </form>
      <div>
        {Places.map(place => (
          <button 
            key={place.id} 
            onClick={() => onPlaceClick(place)}
          >
            {place.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;
