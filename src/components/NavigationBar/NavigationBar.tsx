import { NavLink } from "react-router-dom";

const NavigationBar = (): React.ReactElement => (
  <nav className="nav">
    <ul className="nav__list">
      <li>
        <NavLink className="nav__link" to={"/burgers"}>
          Burgers
        </NavLink>
      </li>
      <li>
        <NavLink className="nav__link" to={"/burgers/add"}>
          Add Burgers
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
