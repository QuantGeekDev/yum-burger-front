import Button from "../Button/Button";
import FormStyled from "./FormStyled";
interface FormProps {
  actionOnClick: (event: React.MouseEvent) => void;
}
const Form = ({ actionOnClick }: FormProps): React.ReactElement => {
  return (
    <FormStyled className="form" autoComplete="off">
      <div className="form-controls">
        <div className="form-controls__name">
          <label htmlFor="name">Name </label>
          <input id="name" type="text" placeholder="josh" />
        </div>

        <div className="form-controls__image-url">
          <label htmlFor="image-url">Image URL </label>
          <input id="image-url" type="text" />
        </div>

        <div className="form-controls__price">
          <label htmlFor="price">Price </label>
          <div className="currency">
            <input id="price" type="number" step=".01" />
            <span className="currency__value">€</span>
          </div>
        </div>

        <div className="form-controls__calories">
          <label htmlFor="calories">Calories </label>
          <div className="calories">
            <input id="calories" type="number" />
            <span className="calories__value">cal</span>
          </div>
        </div>

        <div className="form-controls__hasGluten">
          <label htmlFor="hasGluten">Has Gluten Free option?</label>
          <input id="hasGluten" type="checkbox" />
        </div>

        <div className="form-controls__isVegan">
          <label htmlFor="isVegan">Is it vegan?</label>
          <input id="isVegan" type="checkbox" />
        </div>
      </div>

      <Button
        className="button--transparent form-controls__submit"
        text="Submit"
        actionOnClick={actionOnClick}
      />
    </FormStyled>
  );
};

export default Form;
