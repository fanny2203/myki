import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutAnalytics from "./LayoutAnalytics";
// screens
import Business from "./screens/Business";
import General from "./screens/General";
import Me from "./screens/Me";
import Project from "./screens/Project";
import Users from "./screens/Users";

export default function MenuAnalytics () {
  const [currentRoute, setCurrentRoute] = useState(1)

  const routesAnalytics = [
    { id: 1, name: "Business", path: "business" },
    { id: 2, name: "General", path: "general" },
    { id: 3, name: "Project", path: "project" },
    { id: 4, name: "Made by me", path: "me" },
    { id: 5, name: "Users", path: "user" }
  ]

  return <LayoutAnalytics
    currentRoute={currentRoute}
    setCurrentRoute={setCurrentRoute}
    items={routesAnalytics}
  >
    <Routes> 
      <Route
        path='/'
        element={<Navigate to='business' />}
      />
      <Route
        path='business'
        element={<Business />}
      /> 
      <Route
        path='general'
        element={<General />}
      />
      <Route
        path='project'
        element={<Project />}
      />
      <Route 
        path='me'
        element={<Me />}
      />
      <Route
        path='user'
        element={<Users />}
      />
    </Routes>
  </LayoutAnalytics>
}