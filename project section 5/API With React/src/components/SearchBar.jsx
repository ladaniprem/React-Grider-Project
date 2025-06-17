// function SearchBar({onSubmit}) {
function SearchBar({onSubmit}) {
 
  // const handleClick = () =>{
      // onSubmit('cars');
  // without using the event their submit the data to reload the react app their does show the I need to tell the parent about some data 
   // when event happens, we want to tell the parent component

  const handleFormClick = (event) =>{
    event.preventDefault();
     onSubmit('cars'); 
  //  console.log('I need to tell the parent about some data');
   };

  return (
    <>
   <div>
    {/* <input/>
    <button onClick={handleClick}>Search</button> */}
    <form onSubmit={handleFormClick}>
      <input />
    </form>
   </div>
    </>
  )
}

export default SearchBar;
 