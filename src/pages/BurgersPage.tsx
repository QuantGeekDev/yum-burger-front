import { useEffect } from "react";
import BurgersPageStyled from "./BurgersPageStyled";
import { useAppDispatch } from "../store/hooks";
import { loadBurgersActionCreator } from "../store/features/burgers/burgersSlice";
import { burgersMock } from "../store/features/burgers/mocks/burgersMock";
import BurgersList from "../components/BurgersList/BurgersList";

const BurgersPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const loadBurgersAction = loadBurgersActionCreator(burgersMock);

  useEffect(() => {
    dispatch(loadBurgersAction);
  }, [dispatch, loadBurgersAction]);

  return (
    <BurgersPageStyled className="burgers-page">
      <h2 className="burgers-page__title">Our Burgers</h2>
      <BurgersList />
    </BurgersPageStyled>
  );
};

export default BurgersPage;
