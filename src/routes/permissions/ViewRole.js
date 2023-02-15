import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Sections
import HeaderPermissions from "./sections/HeaderPermissions";
import ItemNewRole from "./sections/ItemNewRole";
import TopSelects from "./sections/TopSelects";

//Icons
import { RightArrow } from "../../resources/icon";

//Globals
import { useDispatch } from "react-redux";

//Helpers
import { makeRequest, obejectToArray, getBaseRoute } from "../../helpers";

//Actions
import { setIsLoading } from "../../features/Loader";

const ViewRole = () => {
  const [permissions, setPermissions] = useState([]);

  const location = useLocation();
  const keyRole = location.state.id.split("/")[1];
  const navigate = useNavigate();
  const baseRout = getBaseRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    getRole();
  }, []);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const getRole = async () => {
    toggleLoader(true);
    try {
      const result = await makeRequest("rol/view", "POST", {
        rol_key: keyRole,
      });
      const newValue = obejectToArray(result.data.function);
      const fData = newValue.map((item) => {
        const newValues = obejectToArray(item.value);
        return { ...item, value: newValues };
      });
      setPermissions(fData);
    } catch (error) {}
    toggleLoader(false);
  };

  return (
    <div className="h-[100%] p-[20px]">
      <HeaderPermissions title="View Role">
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
      </HeaderPermissions>
      <div
        className="scroll w-[100%] mt-[10px]"
        style={{ height: "calc(100vh - 210px)", overflowY: "auto" }}
      >
        {permissions.map((section, index) => (
          <ItemNewRole
            key={index + section.key}
            data={section}
            colorCheck={"gray"}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewRole;
