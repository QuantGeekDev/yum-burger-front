import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import BurgersPage from "../../pages/BurgersPage";
import AppStyled from "./AppStyled";
import { ToastContainer } from "react-toastify";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <ToastContainer position="top-right" />
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<BurgersPage />} />
        <Route path="*" element={<h1> 404 Page Not Found </h1>} />
      </Routes>
    </AppStyled>
  );
};

export default App;
