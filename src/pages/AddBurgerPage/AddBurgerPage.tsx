import Form from "../../components/Form/Form";
import AddBurgerPageStyled from "./AddBurgerPageStyled";

const AddBurgerPage = (): React.ReactElement => {
  return (
    <AddBurgerPageStyled className="add-burger-page">
      <h1 className="add-burger-page__title">Add Burger</h1>
      <Form buttonText="Add Burger" />
    </AddBurgerPageStyled>
  );
};

export default AddBurgerPage;
