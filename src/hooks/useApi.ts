import axios from "axios";
import { BurgerStructure } from "../store/features/burgers/types";
import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useBurgersApi = () => {
  const dispatch = useAppDispatch();

  const getBurgers = useCallback(async (): Promise<BurgerStructure[]> => {
    try {
      const {
        data: { burgers },
      } = await axios.get("/burgers");

      return burgers;
    } catch (error) {
      throw new Error("Error getting burgers from database");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { getBurgers };
};

export default useBurgersApi;
