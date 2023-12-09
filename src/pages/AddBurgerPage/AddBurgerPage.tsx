import Form from "../../components/Form/Form";
import { BurgerStructure } from "../../store/features/burgers/types";
import AddBurgerPageStyled from "./AddBurgerPageStyled";

const AddBurgerPage = (): React.ReactElement => {
  const onSubmit = (_burger: BurgerStructure) => {
    event?.preventDefault();
  };
  return (
    <AddBurgerPageStyled className="add-burger-page">
      <h1 className="add-burger-page__title">Add Burger</h1>
      <Form buttonText="Add Burger" onSubmit={onSubmit} />
    </AddBurgerPageStyled>
  );
};

export default AddBurgerPage;
