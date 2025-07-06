import './App.css'
import LocationSearch from './components/LocationSearch';
import Map from './components/Map';  
import { useState } from 'react';
import type { Place } from './api/Place';

function App() {

const [Place, setPlace] = useState<Place | null>(null);
  return (
    <>
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='col-span-3 p-2'>
<LocationSearch onPlaceClick={(p) => setPlace(p)}/>
      <div className='col-span-9'>
      <Map  Place={Place}/>
      </div>
    </div>
      </div>
     
    </>
  )
}

export default App
