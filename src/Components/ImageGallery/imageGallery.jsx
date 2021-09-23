import ImageGalleryItem from "../ImageGalleryItem/imageGalleryItem";

function ImageGallery({ images, onSelect, selectImg }) {
  return (
      <ul className="ImageGallery">
          
              {images.map((image, id) => (
                <ImageGalleryItem key={id} image={image}
                  onClick ={()=> onSelect(image)}
               />
            ))}
          
      {/* {images.map(image => 
        <ImageGalleryItem
        //   id={image.id}
          key={image.id}
          webImage={image.webformatURL}
          largeUrl={image.largeImageURL}
          onSelect={selectImg}
          />         
      )} */}
    </ul>
  );
}
 

export default ImageGallery;

 
