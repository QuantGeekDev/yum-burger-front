import { useEffect } from "react";
import BurgersPageStyled from "./BurgersPageStyled";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadBurgersActionCreator } from "../store/features/burgers/burgersSlice";
import { burgersMock } from "../store/features/burgers/mocks/burgersMock";

const BurgersPage = (): React.ReactElement => {
  const burgers = useAppSelector((state) => state.rootReducer.burgers);
  const dispatch = useAppDispatch();
  const loadBurgersAction = loadBurgersActionCreator(burgersMock);

  useEffect(() => {
    dispatch(loadBurgersAction);
  }, [dispatch, loadBurgersAction, burgers]);

  return (
    <BurgersPageStyled className="burgers-page">
      <h2 className="burgers-page__title">Our Burgers</h2>
    </BurgersPageStyled>
  );
};

export default BurgersPage;
