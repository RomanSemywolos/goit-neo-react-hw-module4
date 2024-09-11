import style from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description, openModal }) => {
  return (
    <div className={style.imageCard} onClick={() => openModal(urls.regular, alt_description)}>
      <img
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
