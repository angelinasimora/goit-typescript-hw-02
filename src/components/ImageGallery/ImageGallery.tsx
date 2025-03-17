import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface ImageItem {
  id: string;
  alt_description?: string;
  urls: {
    small: string;
  };
}

interface ImageGalleryProps {
  imageList: ImageItem[];
  imageView: (image: ImageItem) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageList, imageView }) => {
  return (
    <ul className={css.imageGallery}>
      {imageList.map((imageItem) => {
        return (
          <ImageCard
            key={imageItem.id}
            imageItem={imageItem}
            imageView={imageView}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
