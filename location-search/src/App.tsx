import './App.css'
import LocationSearch from './components/LocationSearch';
import Map from './components/Map';

function App() {


  return (
    <>
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='col-span-3 p-2'>
<LocationSearch />
      <div className='col-span-9'>
      <Map />
      </div>
    </div>
      </div>
     
    </>
  )
}

export default App
