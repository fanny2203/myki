import { Routes, Route } from "react-router-dom";

import SwitchScreens from "./elements/SwitchScreens";
import ListMyprojects from "./ListMyProjects";
import Connectors from "./Connectors";

const MenuMyProjects = () => {
  return (
    <Routes>
      <Route path="/" element={<ListMyprojects />} />
      <Route path="/connectors" element={<Connectors />} />
      <Route path="/detailsconnectors" element={<SwitchScreens />} />
    </Routes>
  );
};

export default MenuMyProjects;
