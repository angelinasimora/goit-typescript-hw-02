import Modal from "react-modal";
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, closeModal, image }) {
  if (!image) return null;

  const { alt_description, urls, likes, user } = image;

  const customStyles = {
    overlay: {
      backgroundColor: "rgb(61 55 55 / 75%)",
    },
    content: {
      width: "80%",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      borderRadius: "10px",
      border: "none",
      overflow: "hidden",
       background: "none",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false} 
    >
      <div className={css.container}>
        <img src={urls.regular} alt={alt_description} className={css.img} />
        <div className={css.info}>
          <p className={css.text}>Author - {user.username}</p>
          <p className={css.text}>Likes❤️: {likes}</p>
        </div>
      </div>
    </Modal>
  );
}
