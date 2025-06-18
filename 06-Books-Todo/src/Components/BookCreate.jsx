import { useState } from 'react';

function BookCreate({onCreateBook}) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateBook(title);
    setTitle('');
  }

  return (
    <div className='book-create bg-white rounded-lg shadow-md p-6 max-w-md mx-auto my-8 transition-all duration-500 hover:shadow-lg animate-fadeIn'>
      <h3 className="text-2xl font-bold mb-4 text-center animate-bounce-once transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Add a Book</h3>
      
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="text-lg font-medium transition-colors duration-300 hover:text-blue-600 animate-slideIn bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Title
          </label>
          
          <input 
            className='input p-2 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md animate-slideIn' 
            value={title} 
            onChange={handleChange} 
            placeholder="Enter book title..."
          />
          
          <button 
            className='button text-white py-2 px-4 rounded-md mt-2 transition-all duration-500 
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-blue-500 hover:via-green-500 hover:to-yellow-500 
            hover:scale-105 hover:shadow-md active:scale-95 animate-pulse'
          >
            Create!
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookCreate;
