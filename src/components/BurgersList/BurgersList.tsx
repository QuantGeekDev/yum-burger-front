import { BurgerStructure } from "../../store/features/burgers/types";
import { useAppSelector } from "../../store/hooks";
import BurgerCard from "../BurgerCard/BurgerCard";

const BurgersList = (): React.ReactElement => {
  const burgers = useAppSelector(({ burgersState: { burgers } }) => burgers);

  return (
    <>
      {burgers.map((burger: BurgerStructure) => (
        <li key={burger.name}>
          {" "}
          <BurgerCard burger={burger} />{" "}
        </li>
      ))}
    </>
  );
};

export default BurgersList;
