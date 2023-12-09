import axios from "axios";
import {
  BurgerStructure,
  MongooseBurgerStructure,
} from "../store/features/burgers/types";
import { useCallback } from "react";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useBurgersApi = () => {
  const getBurgers = useCallback(async (): Promise<
    MongooseBurgerStructure[]
  > => {
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
    async (id: string): Promise<MongooseBurgerStructure> => {
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

  const addBurger = useCallback(async (newBurger: BurgerStructure) => {
    try {
      const response = await axios.post("/burgers", newBurger);
      const addedBurger = (await response.data) as BurgerStructure;
      return addedBurger;
    } catch (error) {
      throw new Error("Error adding burger to database");
    }
  }, []);

  return { getBurgers, deleteBurger, addBurger };
};

export default useBurgersApi;
