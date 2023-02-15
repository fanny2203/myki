//Components
import Modal from "../../Modal";

import { useLocation } from "react-router-dom";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setModalDuplicate } from "../../../features/modal/modalsStorage";
import { setDuplicateFile } from "../../../features/handleFile";
import { addCollection } from "../../../features/collectionsStorage";

//Helpers
import { makeRequest } from "../../../helpers";

const ModalDeleteProject = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const modalDuplicate = useSelector(
    (state) => state.modalsStorage.modalDuplicate
  );
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const duplicateCollection = () => {
    const id = location?.state.path.id;
    const curretId = id.split("/")[1];
    dispatch(setDuplicateFile(modalDuplicate.data.name));
    makeRequest("project/storage/duplicate", "POST", {
      project_key: curretId,
      collection_name: modalDuplicate.data.name,
    })
      .then((response) => {
        dispatch(addCollection(response.data.data));
        dispatch(setDuplicateFile(null));
      })
      .catch((error) => {
        dispatch(setDuplicateFile(null));
      });
    closeModal();
  };

  const closeModal = () => {
    dispatch(setModalDuplicate(false));
  };

  return (
    <Modal
      stateModal={modalDuplicate.active}
      closeModal={closeModal}
      padding="p-[20px]"
    >
      <div className="flex flex-col items-center w-full h-full">
        <p className="text-lg text-center font-medium">
          ¿is sure to duplicate this collection?
        </p>
        <div className="mt-[15px]">
          <button className="text-color-danger" onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            className="bg-color-primary text-white px-[10px] py-[5px] rounded ml-[15px]"
            onClick={() => duplicateCollection()}
            style={{ background: primaryColor }}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteProject;
