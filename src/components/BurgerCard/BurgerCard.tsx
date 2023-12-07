import { BurgerStructure } from "../../store/features/burgers/types";
import BurgerCardStyled from "./BurgerCardStyled";
import Button from "../Button/Button";
interface BurgerCardProps {
  burger: BurgerStructure;
}
const BurgerCard = ({
  burger: { name, imageUrl },
}: BurgerCardProps): React.ReactElement => {
  return (
    <BurgerCardStyled className="burger">
      <h2 className="burger__title">{name}</h2>
      <img
        className="burger__image"
        alt=""
        height="100"
        width="100"
        src={imageUrl}
      />
      <Button
        className="burger__delete-button button--transparent"
        text="Delete"
        actionOnClick={() => {
          console.log("Hello world!");
        }}
      />
    </BurgerCardStyled>
  );
};

export default BurgerCard;
