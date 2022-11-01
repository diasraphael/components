import axios from "axios";

const fetchBreeds = async () => {
  let response;
  try {
    response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  } catch (error) {
    console.log(error);
  }
  return response;
};
export default fetchBreeds;
