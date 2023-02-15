import { useState } from "react";
import { useLocation } from "react-router-dom";

//Components
import Modal from "../../Modal";
import CustomButton from "../../CustomButton";

//Globals
import { useDispatch, useSelector } from "react-redux";

// Notifications Toast
import { useToastContext } from "../../../context/ToastContext";

//Actions
import { setModalEdit } from "../../../features/modal/modalsStorage";
import { changeNameCollection } from "../../../features/collectionsStorage";
import { setIsLoading } from "../../../features/Loader";
import { updateNameProject } from "../../../features/projectsStorage";
import { updateNameMyProject } from "../../../features/projectsSection";

//Externals
import { TextField, InputAdornment } from "@mui/material";

//Helpers
import { makeRequest } from "../../../helpers";

//Hooks
import useForm from "../../../hooks/useForm";

// Icons
import { ProyectIcon } from "../../../resources/icon";

const ModalUploadFile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const addToast = useToastContext();
  const modalEdit = useSelector((state) => state.modalsStorage.modalEdit);
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const currentRoute = location?.pathname.split("/");
  const nameRoute = currentRoute[currentRoute.length - 1];

  const { formData, handleChange } = useForm();

  let ready = false;

  if (nameRoute == "storage" || nameRoute === "projects") {
    ready = formData?.description?.length > 9 && formData?.name?.length > 2;
  } else if (nameRoute == "details") {
    ready = formData?.name?.length > 2;
  }

  const closeModal = () => {
    dispatch(setModalEdit(false));
  };

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const saveName = async () => {
    if (ready) {
      if (nameRoute === "details") {
        const id = location?.state.path.id.split("/")[1];
        try {
          toggleLoader(true);
          const response = await makeRequest("project/storage/edit", "POST", {
            project_key: id,
            collection_name: modalEdit.data.name,
            new_name: formData.name,
          });
          if (response.data.status) {
            dispatch(
              changeNameCollection({
                name: modalEdit.data.name,
                newName: formData.name,
              })
            );
          } else {
            addToast(response.data.message, false);
          }
          toggleLoader(false);
          closeModal();
        } catch (error) {
          console.log(error);
          toggleLoader(false);
        }
      } else if (nameRoute === "storage" || nameRoute === "projects") {
        const id = modalEdit.data.id.split("/")[1];
        try {
          toggleLoader(true);
          const response = await makeRequest(`project/edit/${id}`, "POST", {
            description: formData.description,
            name: formData.name,
          });
          if (response.data.status) {
            if (nameRoute === "storage") {
              dispatch(
                updateNameProject({
                  name: modalEdit.data.name,
                  newName: formData.name,
                })
              );
            }
            if (nameRoute === "projects") {
              dispatch(
                updateNameMyProject({
                  name: modalEdit.data.name,
                  newName: formData.name,
                })
              );
            }
          } else {
            addToast(response.data.message, false);
          }
          toggleLoader(false);
          closeModal();
        } catch (error) {
          console.log(error);
          toggleLoader(false);
        }
      }
    }
  };

  return (
    <Modal
      stateModal={modalEdit.active}
      closeModal={closeModal}
      padding="p-[20px]"
    >
      <div className="flex flex-col w-full h-full">
        <p className="text-lg mr-[15px] w-[120px] mb-[10px]">Edit</p>
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          sx={{ width: "100%", height: "40px" }}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ProyectIcon />
              </InputAdornment>
            ),
          }}
        />
        {nameRoute == "storage" ||
          (nameRoute === "projects" && (
            <textarea
              className="w-full shadow-sm border-b mt-[20px]"
              name="description"
              id=""
              cols="30"
              rows="5"
              onChange={handleChange}
              placeholder="Description: Min 10 characters"
            ></textarea>
          ))}

        <div className="flex mt-[20px] w-full justify-end">
          <CustomButton text="Cancel" showBorder={false} action={closeModal} />
          <button
            className={`rounded-full w-28 px-2 py-[2px] text-md flex items-center justify-center text-white gap-1 capitalize ${
              ready ? "bg-color-primary" : "bg-gray2"
            }`}
            onClick={() => saveName()}
            style={{ background: primaryColor }}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalUploadFile;
