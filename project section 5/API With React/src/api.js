import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get(`https://api.pexels.com/v1/search?query=${term}`, {
    headers: {
      Authorization: '',
    },
  });

  return response.data.photos;
};
export default searchImages;
