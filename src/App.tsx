import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Modal from 'react-modal';
import fetchImages from './components/FetchImages/FetchImages';

// Типи для зображень
interface Image {
  id: string;
  urls: {
    regular: string;
    full: string;
  };
  alt_description: string;
  likes: number;
  user: {
    username: string;
  };
}

// Типізація для відповіді від API
interface ResponseDataForFetch {
  results: Image[];
}

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

Modal.setAppElement('#root');

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [currentImageItem, setCurrentImageItem] = useState<Image | null>(null);

  useEffect(() => {
    if (!searchQuery) return;
    setImages([]);
    setPage(1);
    handleFetchImages(searchQuery, 1);
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFetchImages = async (query: string, page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const data: ResponseDataForFetch = await fetchImages(query, page, ACCESS_KEY);
      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (error: any) {
      console.error("Error fetching images:", error.message || error);
      setError(error.message || error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    handleFetchImages(searchQuery, nextPage);
  };

  const handleOpenModal = (image: Image) => {
    setCurrentImageItem(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setCurrentImageItem(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery imageList={images} imageView={handleOpenModal} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMoreImages} />}
        </>
      )}
      {modalIsOpen && (
        <ImageModal isOpen={modalIsOpen} closeModal={handleCloseModal} image={currentImageItem} />
      )}
    </div>
  );
}

export default App;