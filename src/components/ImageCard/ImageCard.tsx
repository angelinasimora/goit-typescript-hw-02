import React from "react";
import css from "./ImageCard.module.css";

interface ImageItem {
  id: string;
  alt_description?: string;
  urls: {
    small: string;
  };
}

interface ImageCardProps {
  imageItem: ImageItem;
  imageView: (image: ImageItem) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageItem, imageView }) => {
  return (
    <li className={css.imageCard} onClick={() => imageView(imageItem)}>
      <div className={css.revision}>
        <img
          className={css.revImage}
          src={imageItem.urls.small}
          alt={imageItem.alt_description?.replace(/^\w/, m => m.toUpperCase())}
        />
      </div>
    </li>
  );
};

export default ImageCard;