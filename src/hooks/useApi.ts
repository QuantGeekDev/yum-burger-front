import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useApi = () => {
  const loadBurgers = async () => {
    const { data } = await axios.get("/burgers");
    return data;
  };

  return { loadBurgers };
};

export default useApi;
