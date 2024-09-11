import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={style.imageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard {...image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
