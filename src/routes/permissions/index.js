import { Routes, Route } from "react-router-dom";

import Roles from "./Roles";
import NewRole from "./NewRole";
import ViewRole from "./ViewRole";
import EditRole from "./EditRole";

export default function MenuPermissions() {
  return (
    <Routes>
      <Route path="/" element={<Roles />} />
      <Route path="/newrole" element={<NewRole />} />
      <Route path="/viewrole" element={<ViewRole />} />
      <Route path="/editrole" element={<EditRole />} />
    </Routes>
  );
}
