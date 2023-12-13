import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import BurgersPage from "../../pages/BurgersPage/BurgersPage";
import AppStyled from "./AppStyled";
import { ToastContainer } from "react-toastify";
import AddBurgerPage from "../../pages/AddBurgerPage/AddBurgerPage";
import BurgerDetailPage from "../../pages/BurgerDetailPage/BurgerDetailPage";
import ModifyBurgerPage from "../../pages/ModifyBurgerPage/ModifyBurgerPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <ToastContainer position="top-right" />
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<BurgersPage />} />
        <Route path="/burgers/add" element={<AddBurgerPage />} />
        <Route path="/burgers/:id" element={<BurgerDetailPage />} />
        <Route path="/burgers/modify/:id" element={<ModifyBurgerPage />} />
        <Route path="*" element={<h1> 404 Page Not Found </h1>} />
      </Routes>
    </AppStyled>
  );
};

export default App;
