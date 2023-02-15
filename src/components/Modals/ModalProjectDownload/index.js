//Components
import Modal from "../../Modal";
import CustomButton from "../../CustomButton";
import { useLocation } from "react-router-dom";

//Icons
import { IconFileModal } from "./elements/Icons";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setModalDownload } from "../../../features/modal/modalsStorage";
import { setIsLoading } from "../../../features/Loader";
import { setDownloadingFile } from "../../../features/handleFile";

//Externals
import { TextField } from "@mui/material";

//Hooks
import useForm from "../../../hooks/useForm";

//Helpers
import { makeRequest } from "../../../helpers";

const ModalProjectDownload = () => {
  const modalDownload = useSelector(
    (state) => state.modalsStorage.modalDownload
  );
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const { handleChange, formData } = useForm();

  const dispatch = useDispatch();
  const location = useLocation();

  const currentLocation = location?.pathname.split("/");
  const locationName = currentLocation[currentLocation.length - 1];

  var projectId = "";

  if (locationName === "details") {
    projectId = location?.state.path.id.split("/")[1];
  }

  const closeModal = () => {
    dispatch(setModalDownload(false));
  };

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const download = async () => {
    dispatch(setDownloadingFile(modalDownload.data.name));
    closeModal();
    let response;
    if (locationName === "details") {
      response = await makeRequest(
        "project/storage/download/collection",
        "POST",
        {
          project_key: projectId,
          collection_name: modalDownload.data.name,
          extension: formData.extension,
        }
      );
    } else if (locationName === "storage") {
      const projectIdd = modalDownload.data.id.split("/")[1];
      response = await makeRequest("project/storage/download/project", "POST", {
        project_key: projectIdd,
        extension: formData.extension,
      });
    }
    const downloadURL = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = downloadURL;
    link.setAttribute(
      "download",
      `${modalDownload.data.name}.${formData.extension}`
    );
    document.body.appendChild(link);
    link.click();
    dispatch(setDownloadingFile(null));
  };

  return (
    <Modal
      stateModal={modalDownload.active}
      closeModal={closeModal}
      padding="p-[0px]"
    >
      <div className="flex w-full h-full">
        <div
          className="flex justify-center items-center w-[30%] h-[250px] bg-gray p-[20px] text-color-primary"
          style={{ color: primaryColor }}
        >
          <IconFileModal />
        </div>
        <div className="w-[70%] h-[250px] p-[20px]">
          <p
            className="text-xl text-color-primary"
            style={{ color: primaryColor }}
          >
            Download file
          </p>
          <p className="mt-[15px] text-lg text-gray2">Name</p>
          <p> {modalDownload?.data?.name}</p>

          <TextField
            id="standard-basic"
            label="Conver to .CSV"
            variant="standard"
            name="extension"
            sx={{ width: "100%", height: "40px" }}
            onChange={handleChange}
          />

          <div className="flex mt-[40px] justify-end">
            <CustomButton
              text="Cancel"
              showBorder={false}
              action={() => closeModal()}
            />
            <div className="ml-[10px]" onClick={() => download()}>
              <CustomButton text="Continue" primary={true} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectDownload;
