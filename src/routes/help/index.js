import { Route, Routes } from "react-router-dom";
import Docs from "./Docs";

const help = () => {
  return (
    <Routes>
      <Route path="/" element={<Docs />} />
    </Routes>
  );
};

export default help;
