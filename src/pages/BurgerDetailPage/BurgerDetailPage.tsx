import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import { cheeseBurgerMock } from "../../store/features/burgers/mocks/burgersMock";
import BurgerDetailPageStyled from "./BurgerDetailStyled";

const BurgerDetailPage = (): React.ReactElement => {
  const { name, ingredients, price, imageUrl, isVegan, hasGluten } =
    cheeseBurgerMock;
  return (
    <BurgerDetailPageStyled>
      <h1 className="burger-detail__name">{name}</h1>
      <img
        className="burger-detail__image"
        alt={name}
        height="280"
        width="280"
        src={imageUrl}
      />

      <div className="burger-detail__info">
        <div className="burger-detail__badges">
          {hasGluten ? (
            <img
              className="badges__hasGluten"
              alt="badge indicating that food has gluten"
              src="https://i.ibb.co/7nVs3j5/gluten-Free.webp"
            />
          ) : null}

          {isVegan ? (
            <img
              className="badges__isVegan"
              src="https://i.ibb.co/HrNWNGw/vegan.webp"
              alt="badge indicating that food is vegan"
            />
          ) : null}
        </div>
        <div className="burger-detail__order-button">
          <Button
            className="button button--transparent"
            text="Order"
            actionOnClick={() =>
              toast.error("Unable to place order, please try again later")
            }
          />
        </div>
      </div>
      <div className="burger-detail__bottom">
        <div className="burger-detail__ingredients">
          <h2 className="ingredients__title">Ingredients:</h2>
          <p className="ingredients__list"> {ingredients}</p>
        </div>
        <div className="burger-detail__price">
          <span className="price__label">Price: </span>
          <span className="price__value"> {price} €</span>
        </div>
      </div>
    </BurgerDetailPageStyled>
  );
};

export default BurgerDetailPage;
