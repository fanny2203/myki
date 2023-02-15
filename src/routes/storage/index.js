import { Routes, Route } from "react-router-dom";
import MainScrenn from "./MainScreen";
import ProjectDetails from "./ProjectDetails";
import UpgradeStorage from "./UpgradeStorage";
import RecycleBind from "./RecycleBin";
import InfoCollection from "./InfoCollection";

export default function MenuConnection() {
  return (
    <Routes>
      <Route path="/" element={<MainScrenn />} />
      <Route path="/details" element={<ProjectDetails />} />
      <Route path="/infocollection" element={<InfoCollection />} />
      <Route path="/upgrade" element={<UpgradeStorage />} />
      <Route path="/recyclebin" element={<RecycleBind />} />
    </Routes>
  );
}
