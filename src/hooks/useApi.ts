import axios from "axios";
import { BurgerStructure } from "../store/features/burgers/types";
import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useBurgersApi = () => {
  const dispatch = useAppDispatch();
  const showLoadingAction = showLoadingActionCreator();
  const hideLoadingAction = hideLoadingActionCreator();

  const getBurgers = useCallback(async (): Promise<BurgerStructure[]> => {
    dispatch(showLoadingAction);

    const {
      data: { burgers },
    } = await axios.get("/burgers");

    dispatch(hideLoadingAction);

    return burgers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { getBurgers };
};

export default useBurgersApi;
