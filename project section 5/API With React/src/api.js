import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get(`https://api.pexels.com/v1/search?query=${term}`, {
    headers: {
      Authorization: '14LeX1b0Mdqqt03EQxJwNm60J1SGPjCyY1Ik5h3D6WZVOjkn8cJKhhIj',
    },
  });

  return response.data.photos;
};
export default searchImages;
