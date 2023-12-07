import axios from "axios";
import { BurgerStructure } from "../store/features/burgers/types";
import { useCallback } from "react";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useBurgersApi = () => {
  const getBurgers = useCallback(async (): Promise<BurgerStructure[]> => {
    try {
      const {
        data: { burgers },
      } = await axios.get("/burgers");

      return burgers;
    } catch (error) {
      throw new Error("Error getting burgers from database");
    }
  }, []);

  const deleteBurger = useCallback(
    async (id: string): Promise<BurgerStructure> => {
      try {
        const {
          data: { burger },
        } = await axios.delete(`/burgers/${id}`);
        return burger;
      } catch (error) {
        throw new Error("Error deleting burger from database");
      }
    },
    [],
  );

  return { getBurgers, deleteBurger };
};

export default useBurgersApi;
