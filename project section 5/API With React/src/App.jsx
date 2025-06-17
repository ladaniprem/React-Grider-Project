import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import searchImages from './api.js';
import ImageList from './components/ImageList.jsx';  
import ImageShow from './components/ImageShow.jsx';
function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const photos = await searchImages(term);
    setImages(photos);
  }
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 animate-gradient-xy p-5">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-gray-800 mb-5 text-3xl font-bold text-center transition-all duration-300 hover:scale-105">
        Image Search
      </h1>
      <div className="transform transition-all duration-300 hover:-translate-y-1">
        <p className="text-gray-600 text-center">
        Search for images using the Unsplash API
        </p>
      </div>
      
      <div className="mt-8 w-full max-w-2xl animate-fade-in-down">
        <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-white rounded-lg p-4 animate-slide-in">
        <SearchBar onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="mt-10 w-full animate-slide-up">
        <ImageList images={images} />
      </div>
     </div>
    </div>
  )
}

export default App