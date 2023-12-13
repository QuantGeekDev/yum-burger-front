import { useAppSelector } from "../../store/hooks";
import BurgerCard from "../BurgerCard/BurgerCard";
import BurgersListStyled from "./BurgersListStyled";

const BurgersList = (): React.ReactElement => {
  const burgers = useAppSelector(
    ({
      rootReducer: {
        burgersReducer: { burgers },
      },
    }) => burgers,
  );

  return (
    <BurgersListStyled className="burgers">
      <ul className="burgers__list">
        {burgers.map((burger) => (
          <li className={burger.name} key={burger._id}>
            <BurgerCard burger={burger} />
          </li>
        ))}
      </ul>
    </BurgersListStyled>
  );
};

export default BurgersList;
