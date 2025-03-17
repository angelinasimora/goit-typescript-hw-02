import { ResponseDataForFetch } from '../../types';  // Імпортуємо типи

export default async function fetchImages(
  query: string,
  page: number,
  accessKey: string
): Promise<ResponseDataForFetch> {
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${accessKey}`;

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch images. Status: ${response.status}`);
    }

    const data: ResponseDataForFetch = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
