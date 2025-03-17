import css from "./ImageCard.module.css"

export default function ImageCard({ imageItem, imageView }) {
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
}
