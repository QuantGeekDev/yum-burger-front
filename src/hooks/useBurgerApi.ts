import axios from "axios";
import {
  BurgerStructure,
  MongooseBurgerStructure,
} from "../store/features/burgers/types";
import { useCallback } from "react";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = false;

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
      throw new Error("Error getting burgers from API");
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
        throw new Error("Error deleting burger from API");
      }
    },
    [],
  );

  const addBurger = useCallback(
    async (newBurger: BurgerStructure): Promise<MongooseBurgerStructure> => {
      try {
        const { data: addedBurger } = await axios.post("/burgers", newBurger);
        return addedBurger as MongooseBurgerStructure;
      } catch (error) {
        throw new Error("Error adding burger to API");
      }
    },
    [],
  );

  const getBurgerById = useCallback(
    async (id: string): Promise<MongooseBurgerStructure> => {
      try {
        const { data: requestedBurger } = await axios.get(`/burgers/${id}`);
        return requestedBurger;
      } catch (error) {
        throw new Error("Error getting burger by id from API");
      }
    },
    [],
  );

  return { getBurgers, deleteBurger, addBurger, getBurgerById };
};

export default useBurgersApi;
