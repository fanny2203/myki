//Components
import Modal from "../../Modal";

import { useLocation } from "react-router-dom";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setModalRestore } from "../../../features/modal/modalsStorage";
import { setIsLoading } from "../../../features/Loader";
import { deleteBin } from "../../../features/bins";

//Helpers
import { makeRequest } from "../../../helpers";

const ModalRestoreProject = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const modalRestore = useSelector((state) => state.modalsStorage.modalRestore);
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const currentRoute = location?.pathname.split("/");
  const nameRoute = currentRoute[currentRoute.length - 1];

  const closeModal = () => {
    dispatch(setModalRestore(false));
  };

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const restore = () => {
    toggleLoader(true);
    makeRequest("bin/restore", "POST", {
      document_id: modalRestore.data.id,
    })
      .then((response) => {
        console.log("response restore", restore);
        dispatch(deleteBin(modalRestore.data));
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => toggleLoader(false));
  };

  return (
    <Modal
      stateModal={modalRestore.active}
      closeModal={closeModal}
      padding="p-[20px]"
    >
      <div className="flex flex-col items-center w-full h-full">
        <p className="text-lg text-center font-medium">
          ¿Are you sure you want to restore this file?
        </p>
        <div className="mt-[15px]">
          <button className="text-color-primary" style={{ color: primaryColor }} onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            className="bg-color-primary text-white px-[10px] py-[5px] rounded ml-[15px]"
            onClick={() => restore()}
            style={{ background: primaryColor }}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalRestoreProject;
