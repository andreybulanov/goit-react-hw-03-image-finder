function ImageGalleryItem({ webImage, onSelect, largeUrl, image, onClick }) {
  const { id, tags, webformatURL } = image;
  return (
    // <li className="ImageGalleryItem" onClick={() => onSelect(largeUrl)}>
    //   <img src={webImage} alt="" className="ImageGalleryItem-image" />
    // </li>

    <li key={id} className="ImageGalleryItem" onClick={onClick}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;

