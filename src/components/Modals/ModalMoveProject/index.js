import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Components
import Modal from "../../Modal";
import CustomButton from "../../CustomButton";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Externals
import { TextField, Box } from "@mui/material";

//Actions
import { setModalMove } from "../../../features/modal/modalsStorage";
import { setMoveFile } from "../../../features/handleFile";
import { deleteCollections } from "../../../features/collectionsStorage";

//Helpers
import { makeRequest } from "../../../helpers";

//Icons s
import {
  DestinyIcon,
  SearchIcon,
  DirIcon,
  CloudIcon,
} from "../../../resources/icon";

const ModalMoveProject = () => {
  const modalMove = useSelector((state) => state.modalsStorage.modalMove);
  const projects = useSelector((state) => state.projectsStorage.projects);
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const [destiny, setDestiny] = useState(null);
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  const changeFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  const closeModal = () => {
    dispatch(setModalMove(false));
    setDestiny(null);
  };

  const moveCollection = () => {
    const id = location?.state.path.id.split("/")[1];
    const idDestination = destiny.id.split("/")[1];
    dispatch(setMoveFile(modalMove.data.name));
    makeRequest("project/storage/move/collection", "POST", {
      project_key: id,
      collection_name: modalMove.data.name,
      destination_project_key: idDestination,
    })
      .then((response) => {
        dispatch(deleteCollections(response.data.data.name));
        dispatch(setMoveFile(null));
      })
      .catch((error) => {
        dispatch(setMoveFile(null));
      });

    closeModal();
  };

  const changeDestiny = (project) => {
    setDestiny(project);
  };

  const projectsFiltered = projects.filter((project) =>
    project.name.includes(filter)
  );

  return (
    <Modal
      stateModal={modalMove.active}
      closeModal={closeModal}
      padding="p-[20px]"
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between w-full mt-[10px] pb-[20px] border-b border-color-primary" style={{borderColor: primaryColor}}>
          <div className="flex items-center text-color-primary w-[20%]" style={{ color: primaryColor }}>
            <DestinyIcon />
            <p className="ml-[5px]">Destiny</p>
          </div>
          <div className="bg-gray p-[2px] w-[75%]">Root / {destiny?.name}</div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline w-full">
            <p className="text-lg mr-[15px] w-[120px]">My folders</p>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "flex-end",
                marginRight: "15px",
                marginBottom: "8px",
              }}
            >
              <SearchIcon />
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                sx={{ width: "100%", height: "40px", marginLeft: "5px" }}
                onChange={changeFilter}
              />
            </Box>
          </div>
          <div
            className="scroll bg-gray w-full p-[20px] mt-[20px] rounded"
            style={{
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {projectsFiltered.map((project, index) => (
              <div
                className="flex mb-[10px] cursor-pointer items-center"
                key={`${project.name}${index}`}
                onClick={() => changeDestiny(project)}
              >
                <DirIcon />
                <p className="ml-[10px]">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-end items-end mt-[20px]">
          <div className="mr-[10px]">
            <CustomButton
              text="Cancel"
              showBorder={false}
              action={closeModal}
            />
          </div>
          <button
            className={`flex py-1 px-[20px] text-white items-center rounded-[50px] ${
              destiny ? "bg-color-primary" : "bg-gray2"
            }`}
            onClick={moveCollection}
            style={{ background: primaryColor }}
          >
            <p className="mr-[10px] text-white">Move</p>
            <CloudIcon />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMoveProject;
