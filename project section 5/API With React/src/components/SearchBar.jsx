import { useState } from "react";
// function SearchBar({onSubmit}) {
function SearchBar({onSubmit}) {
  const [term,setTerm] = useState('');

  const handleFormClick = (event) =>{
    event.preventDefault();
    onSubmit(term); 
  };
   
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="mt-8 w-full max-w-2xl animate-fade-in-down">
      <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-white rounded-lg p-4 animate-slide-in">
        <form onSubmit={handleFormClick}>
          <input 
            value={term} 
            onChange={handleChange}
            className="px-4 py-2 rounded-full border border-gray-300 w-full outline-none 
                    transition-all duration-300 ease-in-out focus:shadow-lg focus:scale-102 
                    focus:border-blue-500 placeholder:opacity-70"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
 
// why is any of done ?

// Nedd to read the value of the input --> look at term state
// Nedd to update the value of the input --> call setTerm
// component re-renders with evvery keypress- super easy to add in more advanced features now.
