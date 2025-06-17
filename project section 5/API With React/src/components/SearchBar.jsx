import { useState } from "react";
// function SearchBar({onSubmit}) {
function SearchBar({onSubmit}) {
 
   const [term,setTerm] = useState('');
  // const handleClick = () =>{
      // onSubmit('cars');
  // without using the event their submit the data to reload the react app their does show the I need to tell the parent about some data 
   // when event happens, we want to tell the parent component

const handleFormClick = (event) =>{
  event.preventDefault();
    onSubmit(term); 
 
//  console.log('I need to tell the parent about some data');

// Never Ever do this
// Don't try to get a value out of an input using a query selector(or similar)
// you will be rejected from job interviews if you write code like this

// onSubmit(
//   document.querySelector('input').value
// )

// warning :- the way React handles form elements (text input,checkboxes,radio buttons ,etc.) is a little weird
};
 
const handleChange = (e) => {
  // setTerm(e.target.value.replace(/[a-z]/,''));
  setTerm(e.target.value);
};

  return (
    <>
      <div>
        {/* <input/>
        <button onClick={handleClick}>Search</button> */}
         {/* confirm your serch:{term} */}
        <form onSubmit={handleFormClick}>
         {/* {term.length <5 && 'Term must be longer'} */}
          <input value={term} onChange={handleChange} />
        </form>
      </div>
    </>
  );
}

export default SearchBar;
 
// why is any of done ?

// Nedd to read the value of the input --> look at term state
// Nedd to update the value of the input --> call setTerm
// component re-renders with evvery keypress- super easy to add in more advanced features now.
