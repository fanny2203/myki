import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Sections
import HeaderPermissions from "./sections/HeaderPermissions";
import ItemNewRole from "./sections/ItemNewRole";
import ActionsNewRole from "./sections/ActionsNewRole";

//Globals
import { useSelector, useDispatch } from "react-redux";

// Notifications Toast
import { useToastContext } from "../../context/ToastContext";

//Helpers
import {
  makeRequest,
  obejectToArray,
  arrayToObject,
  updatePermissions,
} from "../../helpers";

//Actions
import { setIsLoading } from "../../features/Loader";

const EditRole = () => {
  const [permissions, setPermissions] = useState([]);
  const [change, setChange] = useState(false);

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  const addToast = useToastContext();

  const location = useLocation();
  const keyRole = location.state.id.split("/")[1];
  const nameRole = location.state.name;

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

  const saveRole = async () => {
    toggleLoader(true);
    const transformChildsToObject = permissions.map((permission) => {
      const newChild = arrayToObject(permission.value);
      return { ...permission, value: newChild };
    });
    const transformParentsToObject = arrayToObject(transformChildsToObject);
    try {
      const result = await makeRequest("rol/edit", "PUT", {
        rol_key: keyRole,
        rolname: nameRole,
        function: { ...transformParentsToObject },
      });
      addToast(result.data.message, true);
    } catch (error) {}
    toggleLoader(false);
  };

  const updateValueRole = (value) => {
    setChange(true);
    const newData = updatePermissions(permissions, value);
    setPermissions(newData);
  };

  return (
    <div className="h-[100%] p-[20px]">
      <HeaderPermissions title="Edit Role">
        <ActionsNewRole saveRole={saveRole} btnSaveActive={change} />
      </HeaderPermissions>
      <div
        className="scroll w-[100%] mt-[10px]"
        style={{ height: "calc(100vh - 210px)", overflowY: "auto" }}
      >
        {permissions.map((section, index) => (
          <ItemNewRole
            key={index + section.key}
            data={section}
            colorCheck={primaryColor}
            toggleValue={updateValueRole}
          />
        ))}
      </div>
    </div>
  );
};

export default EditRole;
