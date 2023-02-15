// Components of routes
import { Route, Routes } from "react-router-dom"
// Screens
import Model from "./screen/Model"
import ConnectTo from "./screen/ConnectTo"
import Transform from "./screen/Transform"
import CompareTable from "./screen/CompareTable"

export default function MenuModel () {
  return <Routes>
    <Route path='/' element={<Model />} />
    <Route path='connect-to' element={<ConnectTo />} />
    <Route path='transform' element={<Transform />} />
    <Route path='compare' element={<CompareTable />} />
  </Routes>  
}
