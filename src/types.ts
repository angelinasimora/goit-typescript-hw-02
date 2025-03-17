export type ResponseDataForFetch = {
  data: {
    results: Image[],
    total?: number;
    total_pages?: number;
  }
}
export type Image = {
  id?: number;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: {
    name: string;
  };
}

export type ImageCardForModal = {
  alt: string;
  url: string,
  likes: number,
  username: string,
}

export type ImageModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  data: ImageCardForModal;
}


export type ImageCardProps = {
  item: Image;
  openModal: () => void;
  setDataForModal: ({}: ImageCardForModal) => void;
}
export type ImageGalleryProps = {
  gallaryList: Image[];
  openModal: () => void;
  setDataForModal: ({}: ImageCardForModal) => void;
}
export interface ImageData {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    full: string;
  };
}
