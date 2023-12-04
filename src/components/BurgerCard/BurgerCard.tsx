import { BurgerStructure } from "../../store/features/burgers/types";
import BurgerCardStyled from "./BurgerCardStyled";

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
        alt={name}
        height="100"
        width="100"
        src={imageUrl}
      />
    </BurgerCardStyled>
  );
};

export default BurgerCard;
