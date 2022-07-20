import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page = 1, parPage = 12) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=27787578-75c7552d3109bab8bb14f44ba&image_type=photo&orientation=horizontal&per_page=${parPage}`
  );
  return response.data;
};