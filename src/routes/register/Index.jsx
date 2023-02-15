import { Routes, Route } from "react-router-dom"
// components
import Code from "./screens/Code"
import Register from "./screens/Register"

export default function MenuRegister() {
  return <Routes>
    <Route path='/' element={<Register />} />
    <Route path='code' element={<Code />} />
  </Routes>  
}