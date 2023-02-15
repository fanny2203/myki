import { useState } from "react";
import { useLocation } from "react-router-dom";

import { BellIcon, ReloadIcon, ReloadIcon2 } from "../../../resources/icon";

//Components
import CustomButton from "../../../components/CustomButton";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { setSection } from "../../../features/projectsSection";
import { setIsLoading } from "../../../features/Loader";

//Helpers
import { makeRequest } from "../../../helpers";

// Notifications Toast
import { useToastContext } from "../../../context/ToastContext";

const HeaderMyProjects = () => {
  const section = useSelector((state) => state.projectSection.section);
  const dispatch = useDispatch();
  const location = useLocation();

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const [connect, setConnect] = useState(false);

  const addToast = useToastContext();

  const handleSection = (value) => {
    dispatch(setSection(value));
  };

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const toggleSwitchConnect = async () => {
    toggleLoader(true);
    try {
      const response = await makeRequest("layout/switch", "POST", {
        layout_id: location.state.layout_id,
      });
      if (response.data.status) {
        console.log(response);
      } else {
        addToast(response.data.message, false);
      }
    } catch (error) {
      console.log(error);
    }
    toggleLoader(false);
  };

  return (
    <div
      className="flex items-center w-full justify-between border-b border-color-primary p-[20px] py-[16px]"
      style={{ borderColor: primaryColor }}
    >
      <p className="text-xl">Simetrical</p>
      <div className="flex justify-between items-center w-[650px]">
        <p
          className={`cursor-pointer ${
            section === "status" && "text-color-primary border-b border-b-[2px]"
          }`}
          onClick={() => handleSection("status")}
          style={{ color: section === "status" && primaryColor }}
        >
          Status
        </p>
        <p
          className={`cursor-pointer ${
            section === "setup" && "text-color-primary border-b border-b-[2px]"
          }`}
          onClick={() => handleSection("setup")}
          style={{ color: section === "setup" && primaryColor }}
        >
          Setup
        </p>
        <p
          className={`cursor-pointer ${
            section === "log" && "text-color-primary border-b border-b-[2px]"
          }`}
          onClick={() => handleSection("log")}
          style={{ color: section === "log" && primaryColor }}
        >
          Log
        </p>
        <div>
          <BellIcon />
        </div>
        <div>
          <ReloadIcon />
        </div>
        <div className="flex">
          <p>Connected</p>
          <div
            className={`flex ml-[5px] w-[50px] p-[3px] rounded-[50px] h-[27px] ${
              connect ? "bg-color-primary" : "bg-color-danger"
            }`}
            style={{ background: connect && primaryColor }}
            onClick={() => toggleSwitchConnect()}
          >
            <div className={`w-[20px] h-[20px] rounded-[100px] bg-white`}></div>
          </div>
        </div>
        <button
          className="flex items-center border border-color-primary p-2 py-1.5 rounded-[50px]"
          style={{ borderColor: primaryColor }}
        >
          <p
            className="text-color-primary mt-[-2px]"
            style={{ color: primaryColor }}
          >
            Start sync
          </p>
          <div
            className="ml-[5px] text-color-primary"
            style={{ color: primaryColor }}
          >
            <ReloadIcon2 />
          </div>
        </button>
        <CustomButton
          text="Setup guide"
          primary={true}
          showIcon={true}
          icon="rigthArrow"
          colorIcon="#ffffff"
        />
      </div>
    </div>
  );
};

export default HeaderMyProjects;
