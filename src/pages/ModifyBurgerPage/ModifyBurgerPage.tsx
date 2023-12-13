import Form from "../../components/Form/Form";
import ModifyBurgerPageStyled from "./ModifyBurgerPageStyled";

const ModifyBurgerPage = (): React.ReactElement => {
  return (
    <ModifyBurgerPageStyled>
      <h1 className="modify-burger-page__title"> Modify Burger</h1>
      <Form
        className="modify-burger-page__form"
        buttonText="Modify Burger"
        onSubmit={() => {}}
      />
    </ModifyBurgerPageStyled>
  );
};

export default ModifyBurgerPage;
