import { useState } from "react";
import { useLocation } from "react-router-dom";

//Components
import Modal from "../../Modal";
import CustomButton from "../../CustomButton";

//Globals
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

//Actions
import { setModaUploadFile } from "../../../features/modal/modalsStorage";
import { setUpload } from "../../../features/handleFile";

//Icons
import { FileIcon, DestinyIcon, CloudIcon } from "../../../resources/icon";

const ModalUploadFile = ({ showModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nameFile, setNameFile] = useState("");
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  const location = useLocation();

  var x_api_key = localStorage.getItem("x-api-key").slice(1, -1);

  const closeModal = () => {
    setSelectedFile(null);
    setNameFile("");
    dispatch(setModaUploadFile(false));
  };

  const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
    const name = event.target.value.split("\\");
    setNameFile(name[name.length - 1]);
  };

  const uploadFile = () => {
    if (selectedFile) {
      var formData = new FormData();
      formData.append("file", selectedFile);
      const id = location?.state.path.id.split("/")[1];
      dispatch(setUpload(true));
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL_API}project/storage/draganddrop/${id}`,
          formData,
          {
            headers: {
              "x-api-key": x_api_key,
            },
          }
        )
        .then((response) => {
          dispatch(setUpload(false));
        })
        .catch((error) => {
          dispatch(setUpload(false));
        });
      closeModal();
    }
  };

  return (
    <Modal stateModal={showModal} closeModal={closeModal} padding="p-[20px]">
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center text-color-primary w-[20%]" style={{ color: primaryColor }}>
            <FileIcon />
            <p className="ml-[5px]">Item</p>
          </div>
          <div className="flex bg-gray p-[2px] w-[75%]">
            <p>{nameFile !== "" ? nameFile : "Click to choose a file"}</p>
            <input
              className="absolute"
              type="file"
              name="fileSel"
              id="fileSel"
              onChange={handleFile}
              multiple={false}
              style={{ opacity: 0 }}
              accept=".csv, .json"
            />
          </div>
        </div>
        <div className="flex justify-between w-full mt-[10px] pb-[20px] border-b border-color-primary" style={{borderColor: primaryColor}}>
          <div className="flex items-center text-color-primary w-[20%]" style={{ color: primaryColor }}>
            <DestinyIcon />
            <p className="ml-[5px]">Destiny</p>
          </div>
          <div className="bg-gray p-[2px] w-[75%]">
            Root / {location?.state.path.name}
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
              selectedFile ? "bg-color-primary" : "bg-gray2"
            }`}
            onClick={uploadFile}
            style={{ background: primaryColor }}
          >
            <p className="mr-[10px] text-white">Upload</p>
            <CloudIcon />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalUploadFile;
