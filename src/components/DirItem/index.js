import { useState } from "react";
import { useLocation } from "react-router-dom";

import { DirIcon, Options3Points } from "../../resources/icon";

//Elements
import Dropdown from "../Dropdowns/DropdownStorage";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Helpers
import { makeRequest } from "../../helpers";

//Actions
import {
  setModalInfo,
  setModalDownload,
  setModalDelete,
  setModalEdit,
  setModalMove,
  setModalDuplicate,
  setModalRestore,
} from "../../features/modal/modalsStorage";

const DirItem = ({ data, action }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const moving = useSelector((state) => state.handleFile.move);
  const duplicate = useSelector((state) => state.handleFile.duplicate);
  const downloading = useSelector((state) => state.handleFile.downloading);

  const currentLocation = location?.pathname.split("/");
  const nameLocation = currentLocation[currentLocation?.length - 1];

  const [showDrop, setShowDrop] = useState(false);

  const handleAction = () => {
    setShowDrop(false);
    action(data);
  };

  const handleOptions = (value) => {
    if (value === "details") {
      dispatch(setModalInfo(true));
    }
    if (value === "download") {
      dispatch(setModalDownload({ active: true, data }));
    }
    if (value === "delete") {
      dispatch(setModalDelete({ active: true, data }));
    }
    if (value === "edit") {
      dispatch(setModalEdit({ active: true, data }));
    }
    if (value === "move") {
      dispatch(setModalMove({ active: true, data }));
    }
    if (value === "duplicate") {
      dispatch(setModalDuplicate({ active: true, data }));
    }
    if (value === "restore") {
      dispatch(setModalRestore({ active: true, data }));
    }
  };

  const validateText = () => {
    if (moving === data.name) {
      return "Moving file";
    } else if (duplicate === data.name) {
      return "Doubling file";
    } else if (downloading === data.name) {
      return "Downloading file";
    }
  };

  const validateState = () => {
    if (
      moving === data.name ||
      duplicate === data.name ||
      downloading === data.name
    ) {
      return true;
    }
    return false;
  };

  const validateDropdown = () => {
    if (nameLocation === "storage") {
      return (
        <Dropdown
          handleOptions={handleOptions}
          width="w-[150px]"
          move={false}
          duplicate={false}
        />
      );
    } else if (nameLocation === "details") {
      return <Dropdown handleOptions={handleOptions} width="w-[150px]" />;
    } else if (nameLocation === "recyclebin") {
      return (
        <Dropdown
          handleOptions={handleOptions}
          width="w-[150px]"
          details={false}
          download={false}
          edit={false}
          move={false}
          duplicate={false}
          del={false}
          forceDelete={true}
          restore={true}
        />
      );
    }
  };

  return (
    <div
      className="relative cursor-pointer"
      style={{ inlineSize: "min-content", overflowWrap: "break-word" }}
      tabIndex={0}
      onBlur={() => setShowDrop(false)}
    >
      {validateState() && (
        <div
          className="flex items-center justify-center flex-col rounded absolute w-full h-full"
          style={{
            background: "rgba(0,0,0,0.6)",
            zIndex: 20,
          }}
        >
          <p className="text-gray">{validateText()}</p>
          <div className="spinner">
            <div className="bounce1 bg-gray mr-[5px]"></div>
            <div className="bounce2 bg-gray mr-[5px]"></div>
            <div className="bounce3 bg-gray mr-[5px]"></div>
          </div>
        </div>
      )}
      {showDrop && <>{validateDropdown()}</>}
      <div
        className="flex flex-col justify-between w-[180px] h-[180px] bg-gray rounded p-[15px]"
        onClick={() => handleAction()}
      >
        <div className="flex justify-between">
          <DirIcon />
        </div>
        <div>
          <p>{data.name}</p>
        </div>
      </div>
      <div
        className="flex justify-center absolute w-[30px] py-[15px] cursor-pointer"
        style={{ top: "0px", left: "140px" }}
        onClick={() => setShowDrop(true)}
      >
        <Options3Points />
      </div>
    </div>
  );
};

export default DirItem;
