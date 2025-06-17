import ImageShow from './ImageShow'

function Imagelist({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShow key= {image.id} image={image} />
  });

  return (
    <>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{renderImages}</div>;
    </>
  )
}

export default Imagelist;
