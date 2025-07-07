import type { Place } from '../api/Place';
import { useState, Fragment } from "react";
import { search } from '../api/Search';

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({onPlaceClick}: LocationSearchProps) => {
  const [Places,setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const results = await search(term);
    setPlaces(results);
  }

  return (
    <Fragment>
      <div className="absolute top-4 left-4">
        <form onSubmit={handleSubmit} className="flex gap-2 items-end">
          <div className="flex-1">
            <label className="font-bold text-lg block mb-1" htmlFor="term">
              Search Location:
            </label>
            <input 
              id="location-search"
              title="Search for a location"
              placeholder="Enter a location"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       hover:border-blue-400"
            />
          </div>
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded 
                     hover:bg-blue-600"
          >
            Go
          </button>
        </form>
        
        {Places.length > 0 && (
          <div className="mt-4 border rounded-lg shadow-sm bg-white p-4 max-w-md">
            <div className="space-y-2">
              {Places.map((place) => (
                <button 
                  type="button"
                  key={place.id} 
                  onClick={() => onPlaceClick(place)}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded"
                >
                  {place.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LocationSearch;
