import { BurgerStructure } from "../../store/features/burgers/types";
import { useAppSelector } from "../../store/hooks";
import BurgerCard from "../BurgerCard/BurgerCard";

const BurgersList = (): React.ReactElement => {
  const burgers = useAppSelector(
    ({
      rootReducer: {
        burgersReducer: { burgers },
      },
    }) => burgers,
  );

  return (
    <ul>
      {burgers.map((burger: BurgerStructure) => (
        <li key={burger.name}>
          <BurgerCard burger={burger} />
        </li>
      ))}
    </ul>
  );
};

export default BurgersList;
