import NavigationBar from "../NavigationBar/NavigationBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => (
  <HeaderStyled className="header">
    <img
      className="header__logo"
      alt="Nyam Burger Logo"
      height="57"
      width="57"
      src="./logo.webp"
    />

    <h1 className="header__title">NyamBurger</h1>
  </HeaderStyled>
);

export default Header;
