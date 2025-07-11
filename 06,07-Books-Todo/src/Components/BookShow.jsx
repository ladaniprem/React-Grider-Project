import React from 'react'
import { useState } from 'react';
import BookEdit from './BookEdit';
function BookShow({book, onDelete, onEdit}) {

  const [showEdit, setShowEdit] = useState('false');

   const handleSubmit = (id,newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  }

  let content =  <h3 className='text-xl font-semibold text-gray-800 mb-4'>
        {book.title}
      </h3>;
  if (showEdit) {
    content = <BookEdit onSubmit = {handleSubmit}  book={book} />
  }

 
   
  return (
    <div className='transform transition-all duration-300 hover:scale-105 bg-white rounded-lg shadow-lg p-4 m-2 hover:shadow-xl'>
      <div className='flex justify-center mb-4 overflow-hidden'>
        <img 
          alt='books' 
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          className='rounded-lg transition-transform duration-300 hover:scale-110'
        />
      </div>
     <div>
      {content}
     </div>
      <div className='actions mt-auto flex justify-end'>
        <button 
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2 transition-colors duration-200 transform hover:-translate-y-1'
          onClick={() => setShowEdit(!showEdit)}>
            {showEdit ? 'Hide Edit' : 'Edit Book'}
          </button>
        <button 
          className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200 transform hover:-translate-y-1'
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
