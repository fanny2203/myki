import { useNavigate } from "react-router-dom";

//icons
import { RightArrow } from "../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

const ActionsRoles = () => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <div className="flex items-center" style={{ color: primaryColor }}>
        <p className="mr-[10px] mt-[-3px]" style={{ color: primaryColor }}>
          Transfer supper admid-All privilegios
        </p>
        <RightArrow />
      </div>
      <button
        className="text-white rounded-[20px] ml-[10px] w-[150px] h-[40px]"
        onClick={() => navigate("newrole")}
        style={{ background: primaryColor }}
      >
        New Rol
      </button>
    </div>
  );
};

export default ActionsRoles;
