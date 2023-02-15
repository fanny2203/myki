//Components
import Modal from "../../Modal";

import { useLocation } from "react-router-dom";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setModalDelete } from "../../../features/modal/modalsStorage";
import { deleteCollections } from "../../../features/collectionsStorage";
import { setIsLoading } from "../../../features/Loader";
import { deleteBin } from "../../../features/bins";

//Helpers
import { makeRequest } from "../../../helpers";

const ModalDeleteProject = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const modalDelete = useSelector((state) => state.modalsStorage.modalDelete);
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const currentRoute = location?.pathname.split("/");
  const nameRoute = currentRoute[currentRoute.length - 1];

  const closeModal = () => {
    dispatch(setModalDelete(false));
  };

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const del = async () => {
    toggleLoader(true);
    if (nameRoute === "details") {
      try {
        await makeRequest("project/storage/delete/collection", "DELETE", {
          project_key: location?.state.path.id.split("/")[1],
          collection_name: modalDelete.data.name,
        });
        dispatch(deleteCollections(modalDelete.data.name));
        closeModal();
        toggleLoader(false);
      } catch (error) {
        toggleLoader(false);
      }
    } else if (nameRoute === "storage" || nameRoute === "projects") {
      toggleLoader(true);
      try {
        await makeRequest("project/storage/delete/database", "DELETE", {
          project_key: modalDelete.data.id.split("/")[1],
        });
        closeModal();
        toggleLoader(false);
      } catch (error) {
        toggleLoader(false);
      }
    } else if (nameRoute === "recyclebin") {
      try {
        await makeRequest("bin/delete", "DELETE", {
          object_id: modalDelete.data.id,
        });
        dispatch(deleteBin(modalDelete.data.name));
        closeModal();
        toggleLoader(false);
      } catch (error) {
        toggleLoader(false);
      }
    }
  };

  const validateText = () => {
    if (nameRoute === "details") {
      return " ¿Are you sure to want to delete this item?";
    } else if (nameRoute === "storage" || nameRoute === "projects") {
      return " ¿Are you sure you want to delete the content of this project?";
    } else if (nameRoute === "recyclebin") {
      return " ¿Are you sure to want to delete this item?";
    }
  };

  return (
    <Modal
      stateModal={modalDelete.active}
      closeModal={closeModal}
      padding="p-[20px]"
    >
      <div className="flex flex-col items-center w-full h-full">
        <p className="text-lg text-center font-medium">{validateText()}</p>
        <div className="mt-[15px]">
          <button className="text-color-primary" style={{ color: primaryColor }} onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            className="bg-color-danger text-white px-[10px] py-[5px] rounded ml-[15px]"
            onClick={() => del()}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteProject;
