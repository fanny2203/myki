import { Route, Routes } from "react-router-dom";
// Screens
import InitTable from "./screen/InitTable";
import Create from "./screen/Create";
import Edit from "./screen/Edit";
import Resume from "./screen/Resume";

export default function MenuLayouts () {


  return <Routes>
    <Route path='/' element={<InitTable />} />
    <Route path='create' element={<Create />} />
    <Route path='edit' element={<Edit />} />
    <Route path='resume' element={<Resume />} />
  </Routes>
}