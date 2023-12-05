import { useEffect } from "react";
import BurgersPageStyled from "./BurgersPageStyled";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadBurgersActionCreator } from "../store/features/burgers/burgersSlice";
import BurgersList from "../components/BurgersList/BurgersList";
import useBurgersApi from "../hooks/useApi";
import Loading from "../components/Loading/Loading";

const BurgersPage = (): React.ReactElement => {
  const { getBurgers } = useBurgersApi();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(
    ({
      rootReducer: {
        uiReducer: { isLoading },
      },
    }) => isLoading,
  );

  useEffect(() => {
    (async () => {
      const burgers = await getBurgers();
      const getBurgersAction = loadBurgersActionCreator(burgers);
      dispatch(getBurgersAction);
    })();
  }, [dispatch, getBurgers]);

  return (
    <BurgersPageStyled className="burgers-page">
      {isLoading && <Loading />}
      <h2 className="burgers-page__title">Our Burgers</h2>
      <BurgersList />
    </BurgersPageStyled>
  );
};

export default BurgersPage;
