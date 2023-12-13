import { toast } from "react-toastify";
import Form from "../../components/Form/Form";
import useBurgersApi from "../../hooks/useBurgerApi";
import { BurgerStructure } from "../../store/features/burgers/types";
import AddBurgerPageStyled from "./AddBurgerPageStyled";
import { addBurgerActionCreator } from "../../store/features/burgers/burgersSlice";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

const AddBurgerPage = (): React.ReactElement => {
  const { addBurger } = useBurgersApi();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (currentEvent: FormEvent, burger: BurgerStructure) => {
    currentEvent.preventDefault();
    try {
      const newBurger = await addBurger(burger);
      if (!newBurger) {
        throw new Error("Empty response");
      }
      const addBurgerAction = addBurgerActionCreator(newBurger);
      dispatch(addBurgerAction);
      toast.success("Burger added succesfully");
      navigate("/home");
    } catch (error) {
      toast.error("Error adding burger");
    }
  };

  return (
    <AddBurgerPageStyled className="add-burger-page">
      <h1 className="add-burger-page__title">Add Burger</h1>
      <Form buttonText="Add Burger" onSubmit={onSubmit} />
    </AddBurgerPageStyled>
  );
};

export default AddBurgerPage;
