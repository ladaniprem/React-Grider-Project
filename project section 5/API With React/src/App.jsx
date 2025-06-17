import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import './App.css'
function App() {
  const handleSubmit = (term) => {
    console.log('Do as search it',term);
  }
 
  return (
    <>
    <div>
  <SearchBar onSubmit = {handleSubmit} />
  </div>
    </>
  )
}

export default App;
