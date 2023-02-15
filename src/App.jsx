import { Navigate, Route, Routes } from "react-router-dom";

//Store
import { Provider } from "react-redux";
import { store } from "./app/store";
// Global components context
import { ToastContextProvider } from "./context/ToastContext";
// Menus
import MenuLogin from "./routes/login";
import MenuDashboard from "./routes/dashboard";
import MenuRegister from "./routes/register/Index";
import Redirect from "./components/ScreenRedirect";

// import GoogleTranslate from "./components/Translate";

//Globals styles
import "./globals.css";

export default function App() {
  return (
    <ToastContextProvider>
      <Provider store={store}>
        {/* <GoogleTranslate /> */}
        <div className="antialiased min-h-screen max-h-screen w-full m-0 top-0">
          <Routes>
            {/* Not Session  */}
            <Route element={<Navigate to="login" />} path="/" />
            <Route element={<MenuLogin />} path="login/*" />
            <Route element={<MenuRegister />} path="register/*" />
            <Route element={<Redirect />} path="redirect" />
            {/* Current Session */}
            <Route element={<MenuDashboard />} path=":spacename/dashboard/*" />
          </Routes>
        </div>
      </Provider>
    </ToastContextProvider>
  );
}
