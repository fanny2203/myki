import { useLocation } from "react-router-dom";

//Globals
import { useSelector } from "react-redux";

const HeaderPermissions = ({ title, children }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const location = useLocation();

  const currentPath = location.pathname.split("/");
  const route = currentPath[currentPath.length - 1];

  return (
    <div
      className="flex justify-between items-center px-[20px] h-[80px] border-b"
      style={{ borderColor: primaryColor }}
    >
      <h1 className="text-xl">{title}</h1>
      {children}
    </div>
  );
};

export default HeaderPermissions;
