import axios from "axios";
import { BurgerStructure } from "../store/features/burgers/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useApi = () => {
  const getBurgers = async (): Promise<BurgerStructure[]> => {
    const {
      data: { burgers },
    } = await axios.get("/burgers");

    return burgers;
  };

  return { getBurgers };
};

export default useApi;
