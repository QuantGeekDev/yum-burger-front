import Button from "../../components/Button/Button";
import BurgerDetailPageStyled from "./BurgerDetailStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadBurgerActionCreator } from "../../store/features/burgers/burgersSlice";
import useBurgersApi from "../../hooks/useBurgerApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BurgerDetailPage = (): React.ReactElement => {
  const { id: currentBurgerId } = useParams();

  const dispatch = useAppDispatch();

  const { getBurgerById } = useBurgersApi();

  const burger = useAppSelector(
    (state) => state.rootReducer.burgersReducer.selectedBurger,
  );

  const { name, ingredients, price, imageUrl, isVegan, hasGluten } = burger;

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);
      try {
        const apiBurger = await getBurgerById(currentBurgerId!);
        const loadBurgerAction = loadBurgerActionCreator(apiBurger);

        dispatch(loadBurgerAction);
      } catch (error) {
        toast.error("Error loading from API");
      }
    })();
  }, [currentBurgerId, dispatch, getBurgerById]);

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
            ariaLabel="Order"
            actionOnClick={() => {}}
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
