import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): React.ReactElement => (
  <NavigationBarStyled className="nav">
    <ul className="nav__list">
      <li>
        <NavLink className="nav__link" to={"/home"}>
          Burgers
        </NavLink>
      </li>
      <li>
        <NavLink className="nav__link" to={"/burgers/add"}>
          Add Burgers
        </NavLink>
      </li>
    </ul>
  </NavigationBarStyled>
);

export default NavigationBar;
