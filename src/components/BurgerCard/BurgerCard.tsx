import { MongooseBurgerStructure } from "../../store/features/burgers/types";
import BurgerCardStyled from "./BurgerCardStyled";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/hooks";
import { toast } from "react-toastify";
import { deleteBurgerActionCreator } from "../../store/features/burgers/burgersSlice";
import useBurgersApi from "../../hooks/useBurgerApi";
import { NavLink } from "react-router-dom";
interface BurgerCardProps {
  burger: MongooseBurgerStructure;
}
const BurgerCard = ({
  burger: { name, imageUrl, _id },
}: BurgerCardProps): React.ReactElement => {
  const { deleteBurger: deleteBurgerApi } = useBurgersApi();
  const dispatch = useAppDispatch();
  const deleteBurgerAction = deleteBurgerActionCreator(_id);
  const dispatchDelete = () => dispatch(deleteBurgerAction);

  const deleteBurger = async () => {
    try {
      dispatchDelete();
      const toastSuccessMessage = "Burger deleted succesfully";
      await deleteBurgerApi(_id);
      toast.success(toastSuccessMessage);
    } catch (error) {
      const toastErrorMessage = "Error deleting burger, please try again later";

      toast.error(toastErrorMessage);
    }
  };

  return (
    <BurgerCardStyled className="burger" aria-label={name}>
      <NavLink to={`/burgers/${_id}`}>
        <h2 className="burger__title">{name}</h2>

        <img
          className="burger__image"
          alt=""
          height="100"
          width="100"
          src={imageUrl}
        />
      </NavLink>
      <Button
        className="burger__delete-button button--transparent"
        text="Delete"
        actionOnClick={() => deleteBurger()}
      />
    </BurgerCardStyled>
  );
};

export default BurgerCard;
