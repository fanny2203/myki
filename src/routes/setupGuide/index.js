import { Route, Routes } from "react-router-dom";
import AllGuides from "./AllGuides";

const MenuSetup = () => {
  return (
    <Routes>
      <Route path="/" element={<AllGuides />} />
    </Routes>
  );
};

export default MenuSetup;
