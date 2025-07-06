import type { Place } from '../api/Place';
interface MapProps {
  Place:Place | null;
}
function Map({ Place }: MapProps) {
  return (
    <div>
        Map!!
        {Place && (
          <div>
            <h3>{Place.name}</h3>
            {/* <p>{Place.description}</p> */}
          </div>
        )}
    </div>
  )
}

export default Map
