import axios from 'axios';
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// Helper function to convert HTTP to HTTPS
const convertToHttps = (url: string | null): string | null => {
  if (!url) return null;
  return url.replace('http://', 'https://');
};

export const searchBooks = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`);
    return response.data.items.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title,
      type: item.volumeInfo.categories?.[0] || 'Uncategorized',
      image: convertToHttps(item.volumeInfo.imageLinks?.thumbnail) || null,
      author: item.volumeInfo.authors?.[0] || 'Unknown Author',
      description: item.volumeInfo.description || 'No description available'
    }));
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};