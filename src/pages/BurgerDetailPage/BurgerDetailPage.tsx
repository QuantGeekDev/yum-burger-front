import { cheeseBurgerMock } from "../../store/features/burgers/mocks/burgersMock";

const BurgerDetailPage = (): React.ReactElement => {
  const { name, ingredients, price, imageUrl } = cheeseBurgerMock;
  return (
    <>
      <h1 className="burger-detail__name">{name}</h1>
      <img
        className="burger-detail__image"
        alt={name}
        height="100"
        width="100"
        src={imageUrl}
      />
      <div className="burger-detail__info">
        <div className="burger_detail__badges">
          <img
            className="badges__hasGluten"
            alt="badge indicating that food has gluten"
          />
          <img
            className="badges__isVegan"
            alt="badge indicating that food is vegan"
          />
        </div>
      </div>
      <div className="burger-detail__ingredients">
        <h2>Ingredients:</h2>
        <p> {ingredients}</p>
        <div className="price">
          <span className="price__label">Price: </span>
          <span className="price__value"> {price} </span>
        </div>
      </div>
    </>
  );
};

export default BurgerDetailPage;
