import axios from "axios";
import { DropdownType } from "../components/types";

const fetchBreeds = async () => {
  let response;
  try {
    const { data } = await axios.get<DropdownType[]>(
      `https://api.thedogapi.com/v1/breeds`
    );
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};
export default fetchBreeds;
