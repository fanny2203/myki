//Components
import Modal from "../../Modal";

//Externals
import { TextField } from "@mui/material";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Hooks
import useForm from "../../../hooks/useForm";

//Helpers
import { makeRequest } from "../../../helpers";

//Actions
import { addTag } from "../../../features/projectsSection";
import { setIsLoading } from "../../../features/Loader";

const AddTag = ({ showModal, closeModal, data }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const { handleChange, formData } = useForm();

  const dispatch = useDispatch();

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const saveTag = async () => {
    toggleLoader(true);
    try {
      const response = await makeRequest("tags/object/create", "POST", {
        tag: formData.name,
        object_id: data.id,
      });
      dispatch(addTag({ id: data.id, newTag: response.data.tag[0] }));
    } catch (error) {}
    toggleLoader(false);
    closeModal();
  };

  return (
    <Modal stateModal={showModal} closeModal={closeModal}>
      <div className="flex flex-col w-full">
        <p className="text-xl">Add Tag</p>
        <TextField
          id="standard"
          label="Name"
          name="name"
          variant="standard"
          sx={{ width: "100%" }}
          onChange={handleChange}
        />
        <div className="flex justify-end mt-[10px]">
          <button style={{ color: primaryColor }} onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            className="px-[20px] py-[3px] ml-[15px] rounded text-white"
            style={{ background: primaryColor }}
            onClick={() => saveTag()}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTag;
