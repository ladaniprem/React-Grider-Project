import { useState } from 'react';
function BookEdit({ book,onSubmit}) {
  const [title, setTitle] = useState(book.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  }
  
  return (
    <form className='book-edit'onSubmit={handleSubmit}>
      <label>
        Title
      </label>
      <input className='border border-gray-300 rounded-md p-2 mb-4 w-full' type="text" value={title} onChange={handleTitleChange}/>
      <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 transform hover:-translate-y-1'>
        Save
      </button>
    </form>
  );
}

export default BookEdit;
