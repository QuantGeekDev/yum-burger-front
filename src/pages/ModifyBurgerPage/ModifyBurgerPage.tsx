import { FormEvent, useEffect } from "react";
import Form from "../../components/Form/Form";
import ModifyBurgerPageStyled from "./ModifyBurgerPageStyled";
import { useNavigate, useParams } from "react-router-dom";
import useBurgersApi from "../../hooks/useBurgerApi";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  loadBurgerActionCreator,
  modifyBurgerActionCreator,
} from "../../store/features/burgers/burgersSlice";
import {
  BurgerStructure,
  MongooseBurgerStructure,
} from "../../store/features/burgers/types";

const ModifyBurgerPage = (): React.ReactElement => {
  const { id: currentBurgerId } = useParams();

  const { getBurgerById, modifyBurger } = useBurgersApi();
  const dispatch = useAppDispatch();

  const { selectedBurger: burgerToModify } = useAppSelector(
    (state) => state.rootReducer.burgersReducer,
  );

  const navigate = useNavigate();

  const onSubmit = async (
    currentEvent: FormEvent,
    newBurger: MongooseBurgerStructure | BurgerStructure,
  ) => {
    currentEvent.preventDefault();

    const modifyBurgerAction = modifyBurgerActionCreator(
      newBurger as MongooseBurgerStructure,
    );

    try {
      await modifyBurger(newBurger as MongooseBurgerStructure);
      dispatch(modifyBurgerAction);
      toast.success("Burger modified succesfully");
      navigate("/home");
    } catch (error) {
      toast.error("Error modifying burger");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (!currentBurgerId) {
          toast.error("Burger not found");
          throw new Error();
        }
        const burgerToModify = await getBurgerById(currentBurgerId);
        const loadBurgerAction = loadBurgerActionCreator(burgerToModify);

        dispatch(loadBurgerAction);
      } catch (error) {
        toast.error("Error finding burger to modify");
      }
    })();
  }, [currentBurgerId, getBurgerById, dispatch]);

  return (
    <ModifyBurgerPageStyled>
      <h1 className="modify-burger-page__title"> Modify Burger</h1>
      <Form
        buttonAriaLabel="Modify Burger"
        className="modify-burger-page__form"
        buttonText="Modify Burger"
        onSubmit={onSubmit}
        burgerToModify={burgerToModify}
      />
    </ModifyBurgerPageStyled>
  );
};

export default ModifyBurgerPage;
