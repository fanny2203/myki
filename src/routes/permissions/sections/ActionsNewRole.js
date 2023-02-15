import { useNavigate } from "react-router-dom";

//icons
import { RightArrow } from "../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

//Helpers
import { getBaseRoute } from "../../../helpers";

const NewRole = ({ saveRole, btnSaveActive }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const baseRout = getBaseRoute();
  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <div
        className="flex cursor-pointer mr-[15px] cursor-pointer"
        onClick={() => navigate(`${baseRout}/permissions`)}
      >
        <div style={{ transform: "rotate(180deg)" }}>
          <RightArrow />
        </div>
        <div style={{ transform: "rotate(180deg)" }}>
          <RightArrow />
        </div>
      </div>
      <button
        className="text-white rounded-[20px] ml-[10px] w-[150px] h-[40px]"
        onClick={() => saveRole()}
        style={{ background: btnSaveActive ? primaryColor : "gray" }}
      >
        Save
      </button>
    </div>
  );
};

export default NewRole;
