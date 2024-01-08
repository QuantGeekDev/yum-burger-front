import { FormEvent, useEffect, useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import {
  BurgerStructure,
  MongooseBurgerStructure,
} from "../../store/features/burgers/types";

interface FormProps {
  buttonText: string;
  onSubmit: (
    event: FormEvent,
    newBurger: MongooseBurgerStructure | BurgerStructure,
  ) => void;
  className?: string;
  burgerToModify?: MongooseBurgerStructure;
}

const Form = ({
  buttonText,
  onSubmit,
  className,
  burgerToModify,
}: FormProps): React.ReactElement => {
  const initialBurgerFormState: BurgerStructure = {
    name: "",
    imageUrl: "",
    ingredients: "",
    calories: 0,
    price: 0,
    hasGluten: false,
    isVegan: false,
  };

  const [burgerState, setBurgerState] = useState<
    BurgerStructure | MongooseBurgerStructure
  >(burgerToModify ?? initialBurgerFormState);

  useEffect(() => {
    if (burgerToModify) {
      setBurgerState(burgerToModify);
    }
  }, [burgerToModify]);

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
    <FormStyled
      className={className ?? ""}
      autoComplete="off"
      onSubmit={(currentEvent) => onSubmit(currentEvent, burgerState)}
    >
      <div className="form-controls">
        <div className="form-controls__name">
          <label htmlFor="name">Name </label>
          <input
            id="name"
            type="text"
            defaultValue={name}
            onChange={onChange}
            required={true}
            aria-required="true"
          />
        </div>

        <div className="form-controls__image-url">
          <label htmlFor="imageUrl">Image URL </label>
          <input
            id="imageUrl"
            type="url"
            defaultValue={imageUrl}
            onChange={onChange}
            required
            aria-required="true"
          />
        </div>

        <div className="form-controls__ingredients">
          <label htmlFor="ingredients">Ingredients </label>
          <input
            id="ingredients"
            type="text"
            defaultValue={ingredients}
            onChange={onChange}
            required
            aria-required="true"
          />
        </div>

        <div className="form-controls__price">
          <label htmlFor="price">Price </label>
          <div className="currency">
            <input
              id="price"
              type="number"
              defaultValue={price}
              onChange={onChange}
              step=".1"
              min="0"
              max="1000"
              required
              aria-required="true"
            />
            <span className="currency__value">€</span>
          </div>
        </div>

        <div className="form-controls__calories  :required">
          <label htmlFor="calories">Calories </label>
          <div className="calories">
            <input
              id="calories"
              type="number"
              defaultValue={calories}
              onChange={onChange}
              required
              aria-required="true"
            />
            <span className="calories__value">cal</span>
          </div>
        </div>

        <div className="form-controls__hasGluten">
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            id="hasGluten"
            type="checkbox"
            defaultChecked={hasGluten}
            onChange={onChange}
          />
        </div>

        <div className="form-controls__isVegan">
          <label htmlFor="isVegan">Is it vegan?</label>
          <input
            id="isVegan"
            type="checkbox"
            onChange={onChange}
            defaultChecked={isVegan}
          />
        </div>
      </div>

      <Button
        className="button--transparent form-controls__submit"
        text={buttonText}
        actionOnClick={() => {}}
        type="submit"
      />
    </FormStyled>
  );
};

export default Form;
