function ImageShow({image}) {
  console.log('Image received:', image); // Debug the image data
  
  if (!image || !image.src || !image.src.small) {
    return <div className="text-center p-4">Loading...</div>;
  }
 
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
      <img 
        src={image.src.large} 
        alt={image.alt_description || 'Image'} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          console.error('Image failed to load:', image.src.large);
          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
        }}
      />
    </div>
  ) 
}
export default ImageShow
