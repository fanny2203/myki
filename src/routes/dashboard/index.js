import { Route, Routes } from "react-router-dom";
// layout
import DashboardLayout from "./DashboardLayout";
// Components of routes
import Connect from "./screen/Connect";
import Tutorial from "./screen/Tutorial";
import MenuLicenses from "../licenses";
import LookAndFeel from "../lookandfeel";
import UserDashboard from "../users/Dashboard";
import MenuModel from "../model";
import MenuConnection from "../connection";
import MenuStorage from "../storage";
import MenuMyProjects from "../myProjects";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import MenuAnalytics from "../analytics";
import MenuLayouts from "../layouts";
import Permissions from "../permissions";

//Globlas
import { useSelector } from "react-redux";

//Modals
import ModalProjectInfo from "../../components/Modals/ModalProjectInfo";
import ModalProjectDownload from "../../components/Modals/ModalProjectDownload";
import ModalDeleteProject from "../../components/Modals/ModalDeleteProject";
import ModalProjectEdit from "../../components/Modals/ModalProjectEdit";
import ModalMoveProject from "../../components/Modals/ModalMoveProject";
import ModalDuplicateCollection from "../../components/Modals/ModalDuplicateCollection";
import ModalRestoreProject from "../../components/Modals/ModalRestoreProject";

export default function MenuDashboard() {
  const [tutorial, setTutorial] = useLocalStorage("tutorial", null); // eslint-disable-line
  const { modalInfo } = useSelector((state) => state.modalsStorage);

  return (
    <DashboardLayout>
      <ModalProjectInfo showModal={modalInfo} />
      <ModalProjectDownload />
      <ModalDeleteProject />
      <ModalProjectEdit />
      <ModalMoveProject />
      <ModalDuplicateCollection />
      <ModalRestoreProject />
      <Routes>
        <Route
          path="/"
          element={
            tutorial ? <Connect key="connect" /> : <Tutorial key="tutorial" />
          }
        />
        <Route path="/licenses/*" element={<MenuLicenses />} />
        <Route path="/look" element={<LookAndFeel />} />
        <Route path="/model/*" element={<MenuModel />} />
        <Route path="/users/*" element={<UserDashboard />} />
        <Route path="/connect/*" element={<MenuConnection />} />
        <Route path="/storage/*" element={<MenuStorage />} />
        <Route path="/analytics/*" element={<MenuAnalytics />} />
        <Route path="/projects/*" element={<MenuMyProjects />} />
        <Route path="/layouts/*" element={<MenuLayouts />} />
        <Route path="/permissions/*" element={<Permissions />} />
      </Routes>
    </DashboardLayout>
  );
}
