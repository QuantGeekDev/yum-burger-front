import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { BurgerStructure } from "../../store/features/burgers/types";
interface FormProps {
  buttonText: string;
  onSubmit: (newBurger: BurgerStructure) => void;
}
const Form = ({ buttonText, onSubmit }: FormProps): React.ReactElement => {
  const initialBurgerFormState: BurgerStructure = {
    name: "",
    imageUrl: "",
    ingredients: [],
    calories: 0,
    price: 0,
    hasGluten: false,
    isVegan: false,
  };

  const [burgerState, setBurgerState] = useState<BurgerStructure>(
    initialBurgerFormState,
  );

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setBurgerState({
      ...burgerState,
      [event.currentTarget.id]:
        event.currentTarget.type == "checkbox"
          ? (event.target as HTMLInputElement).checked
          : event.currentTarget.value,
    });
  };

  const { name, price, calories, isVegan, hasGluten, imageUrl, ingredients } =
    burgerState;

  return (
    <FormStyled className="form" autoComplete="off">
      <div className="form-controls">
        <div className="form-controls__name">
          <label htmlFor="name">Name </label>
          <input
            id="name"
            type="text"
            placeholder="josh"
            value={name}
            onChange={onChange}
          />
        </div>

        <div className="form-controls__image-url">
          <label htmlFor="imageUrl">Image URL </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={onChange}
          />
        </div>

        <div className="form-controls__ingredients">
          <label htmlFor="ingredients">Ingredients </label>
          <input
            id="ingredients"
            type="text"
            value={ingredients}
            onChange={onChange}
          />
        </div>

        <div className="form-controls__price">
          <label htmlFor="price">Price </label>
          <div className="currency">
            <input
              id="price"
              type="number"
              value={price}
              onChange={onChange}
              step=".01"
            />
            <span className="currency__value">€</span>
          </div>
        </div>

        <div className="form-controls__calories">
          <label htmlFor="calories">Calories </label>
          <div className="calories">
            <input
              id="calories"
              type="number"
              value={calories}
              onChange={onChange}
            />
            <span className="calories__value">cal</span>
          </div>
        </div>

        <div className="form-controls__hasGluten">
          <label htmlFor="hasGluten">Has Gluten Free option?</label>
          <input
            id="hasGluten"
            type="checkbox"
            checked={hasGluten}
            onChange={onChange}
          />
        </div>

        <div className="form-controls__isVegan">
          <label htmlFor="isVegan">Is it vegan?</label>
          <input
            id="isVegan"
            type="checkbox"
            onChange={onChange}
            checked={isVegan}
          />
        </div>
      </div>

      <Button
        className="button--transparent form-controls__submit"
        text={buttonText}
        actionOnClick={() => {
          onSubmit(burgerState);
        }}
      />
    </FormStyled>
  );
};

export default Form;
