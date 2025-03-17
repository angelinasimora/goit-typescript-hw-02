export default async function fetchImages(query, page, accessKey) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}