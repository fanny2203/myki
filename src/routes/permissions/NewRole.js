import { useState } from "react";

//Sections
import HeaderPermissions from "./sections/HeaderPermissions";
import ItemNewRole from "./sections/ItemNewRole";
import ActionsNewRole from "./sections/ActionsNewRole";
import TopSelects from "./sections/TopSelects";

//Globals
import { useSelector, useDispatch } from "react-redux";

// Notifications Toast
import { useToastContext } from "../../context/ToastContext";

//Helpers
import { makeRequest, arrayToObject, updatePermissions } from "../../helpers";

//Actions
import { setIsLoading } from "../../features/Loader";

//Constants
import PERMISSIONSS from "../../constants/permissions";

//Hooks
import useForm from "../../hooks/useForm";

const EditRole = () => {
  const initialPermissions = JSON.parse(JSON.stringify(PERMISSIONSS));
  const [permissions, setPermissions] = useState(initialPermissions);

  const { primaryColor } = useSelector((state) => state.theme.theme);
  const { handleChange, formData } = useForm();

  const dispatch = useDispatch();
  const addToast = useToastContext();

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const saveRole = async () => {
    toggleLoader(true);
    const transformChildsToObject = permissions.map((permission) => {
      const newChild = arrayToObject(permission.value);
      return { ...permission, value: newChild };
    });
    const transformParentsToObject = arrayToObject(transformChildsToObject);
    try {
      const result = await makeRequest("rol/create", "POST", {
        rolname: formData.name,
        function: { ...transformParentsToObject },
      });
      addToast(result.data.message, true);
    } catch (error) {}
    toggleLoader(false);
  };

  const updateValueRole = (value) => {
    const newData = updatePermissions(permissions, value);
    setPermissions(newData);
  };

  return (
    <div className="h-[100%] p-[20px]">
      <HeaderPermissions title="Create Role">
        <ActionsNewRole
          saveRole={() => saveRole()}
          btnSaveActive={formData?.name}
        />
      </HeaderPermissions>
      <TopSelects handleChange={handleChange} />
      <div
        className="scroll w-[100%] mt-[10px]"
        style={{ height: "calc(100vh - 270px)", overflowY: "auto" }}
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
