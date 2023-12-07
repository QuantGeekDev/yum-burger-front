import { BurgerStructure } from "../../store/features/burgers/types";
import BurgerCardStyled from "./BurgerCardStyled";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/hooks";
import { showLoadingActionCreator } from "../../store/features/ui/uiSlice";
import { toast } from "react-toastify";
import { deleteBurgerActionCreator } from "../../store/features/burgers/burgersSlice";
interface BurgerCardProps {
  burger: BurgerStructure;
}
const BurgerCard = ({
  burger: { name, imageUrl, _id },
}: BurgerCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const deleteBurgerAction = deleteBurgerActionCreator(_id);
  const dispatchDelete = () => dispatch(deleteBurgerAction);

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
          try {
            dispatchDelete();
            toast.success("Burger deleted succesfully!");
          } catch (error) {
            toast.error("Error deleting burger, please try again later");
          }
        }}
      />
    </BurgerCardStyled>
  );
};

export default BurgerCard;
