import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ imageList, imageView }) {
    // console.log("imageList:", imageList);
     return (
    <ul className={css.imageGallery}>
      {imageList.map(imageItem => {
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
}