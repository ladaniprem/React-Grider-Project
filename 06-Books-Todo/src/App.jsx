import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookShow from './components/BookShow'; 

function App() {
  
  const [books,setBooks] = useState([]);

  const createBook = (title) => {
    // Bad code 
    // books.push({id:123,title:title});
    // console.log('Books after creation:', books);
    // setBooks(books);

    // bad code 
    // books.push({ id: Math.random(), title });
    // console.log('Creating book:', title);
    // setBooks([...books]);

    const updatedBooks = [...books, {id:Math.round(Math.random()*9999),title}];
    setBooks(updatedBooks);
  }

  // const handleCreateBook = (title) => {
  //    console.log('Creating book:', title);
  // }

  const deleteBookId = (id) => {
    const updatedBooks = books.filter((books) => {
      return books.id !== id;
    });
    setBooks(updatedBooks);
    console.log('Book deleted with id:', id);
  };

  const editBookId = (id,newTitle) => {
    const updatedBooks= books.map((book)=> {
      if(book.id===id){
           return {...book, title: newTitle};
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  return (
    <>
      <h1 className="animate-fade-in bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
        Books Todo
      </h1>
      <div className="animate-slide-up">
       <BookList onEdit={editBookId}  books= {books} onDelete= {deleteBookId}/>
        <BookCreate onCreateBook={createBook} />
        <p className="animate-text-color bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
          Add your favorite books to the collection!
        </p>
      </div>
    </>
  )
}

export default App

// Key point some the video why the speccial syntax

// React's State Update Mechanism:
// React compares the reference (memory address) of the old state and the new state to decide if a re-render is needed.
// If the reference is the same, React assumes no changes and skips re-rendering.

// Direct Modification Issue:
// If you modify an object inside an array directly (e.g., book.title = 'New Title'), React won’t detect the change because:
// The array reference changes (if you create a new array correctly).
// But the object reference inside the array remains the same.
// This can work initially, but causes bugs later when optimizations are introduced.

// Future Optimization Problem:
// If you later optimize child components (e.g., BookShow) to only re-render when props change, React checks if the incoming object is the same as before.
// If the object was directly modified (same reference), React won’t re-render, even if the content changed.
// Solution: Always Create New Objects:
// Instead of modifying the original object, create a new copy with updated properties:

// javascript
// { ...book, title: 'Dark Tower 2' } // Correct: New object
// This ensures:
// The array reference changes (triggers re-render).
// The object reference inside also changes (ensures child components update correctly).
// Performance vs. Correctness:
// Creating new objects has a small performance cost, but it prevents subtle bugs when optimizations (like React.memo) are used later.