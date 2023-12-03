import BurgersPage from "../../pages/BurgersPage";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => (
  <AppStyled>
    <Header />
    <NavigationBar />
    <BurgersPage />
  </AppStyled>
);

export default App;
