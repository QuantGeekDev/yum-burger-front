import { useEffect } from "react";
import BurgersPageStyled from "./BurgersPageStyled";
import { useAppDispatch } from "../store/hooks";
import { loadBurgersActionCreator } from "../store/features/burgers/burgersSlice";
import BurgersList from "../components/BurgersList/BurgersList";
import useApi from "../hooks/useApi";

const BurgersPage = (): React.ReactElement => {
  const { getBurgers } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const burgers = await getBurgers();
      const loadBurgersAction = loadBurgersActionCreator(burgers);
      dispatch(loadBurgersAction);
    })();
  }, [dispatch, getBurgers]);

  return (
    <BurgersPageStyled className="burgers-page">
      <h2 className="burgers-page__title">Our Burgers</h2>
      <BurgersList />
    </BurgersPageStyled>
  );
};

export default BurgersPage;
