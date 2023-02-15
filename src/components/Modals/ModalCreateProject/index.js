//Components
import Modal from "../../Modal";

// Icons
import { ProyectIcon } from "../../../resources/icon";

// Notifications Toast
import { useToastContext } from "../../../context/ToastContext";

//Externals
import { TextField, InputAdornment } from "@mui/material";

//Hooks
import useForm from "../../../hooks/useForm";

//Helpers
import { makeRequest } from "../../../helpers";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setIsLoading } from "../../../features/Loader";

const ModalCreateProject = ({
  showModalCreateProject,
  closeModal,
  addNewProject,
}) => {
  const dispatch = useDispatch();
  const addToast = useToastContext();

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const { formData, handleChange } = useForm();

  const ready = formData?.description?.length > 9 && formData?.name?.length > 2;

  const createProject = () => {
    if (ready) {
      dispatch(
        setIsLoading({ isLoading: true, textLoading: "Creating project" })
      );
      makeRequest("project/create", "POST", {
        name: formData.name,
        description: formData.description,
      })
        .then((response) => {
          addNewProject(response.data.data);
          addToast(response.data.message, true);
          console.log(response);
        })
        .catch((error) => {
          addToast(error.message, false);
        })
        .finally(() =>
          dispatch(setIsLoading({ isLoading: false, textLoading: "" }))
        );
      closeModal();
    }
  };

  return (
    <Modal stateModal={showModalCreateProject} closeModal={closeModal}>
      <div className="flex flex-col items-center justify-center w-full gap-6">
        <TextField
          type={"text"}
          name="name"
          required
          className="w-full"
          id="standard-basic"
          variant="standard"
          placeholder="Project Name"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ProyectIcon />
              </InputAdornment>
            ),
          }}
        />
        <textarea
          className="w-full shadow-sm border-b "
          name="description"
          id=""
          cols="30"
          rows="5"
          onChange={handleChange}
          placeholder="Description: Min 10 characters"
        ></textarea>
        <div className="flex items-end justify-end w-full gap-2">
          <button
            type="button"
            onClick={() => closeModal()}
            style={{ color: primaryColor }}
            className="text-color-primary w-28 h-9.5 p-2 text-md hover:bg-[#FCFCFC] rounded-xl"
          >
            Cancel
          </button>
          <button
            className={`rounded-full w-28 h-9.5 p-2 text-md flex items-center justify-center text-white gap-1 capitalize ${
              ready ? "bg-color-primary" : "bg-gray2"
            }`}
            onClick={() => createProject()}
            style={{ background: primaryColor }}
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCreateProject;
