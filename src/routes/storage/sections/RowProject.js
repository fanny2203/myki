import { useState } from "react";
import { useLocation } from "react-router-dom";

//Externals
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

//Elements
import Dropdown from "../../../components/Dropdowns/DropdownStorage";

//Helpers
import { makeRequest } from "../../../helpers";

//Icons
import { Options3Points } from "../../../resources/icon";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import {
  setModalInfo,
  setModalDownload,
  setModalDelete,
  setModalEdit,
  setModalMove,
  setModalDuplicate,
} from "../../../features/modal/modalsStorage";

const RowProject = ({ data, action }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const moving = useSelector((state) => state.handleFile.move);
  const duplicate = useSelector((state) => state.handleFile.duplicate);
  const downloading = useSelector((state) => state.handleFile.downloading);
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const currentLocation = location?.pathname.split("/");
  const nameLocation = currentLocation[currentLocation.length - 1];

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
      dispatch(setModalDownload(true));
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

  return (
    <>
      <TableRow
        className="hover:bg-gray relative"
        tabIndex={0}
        onBlur={() => setShowDrop(false)}
      >
        {validateState() && (
          <div
            className="flex justify-center items-center absolute bg-color-danger w-full h-full"
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
        <TableCell
          className="cursor-pointer"
          component="th"
          scope="project"
          onClick={() => handleAction()}
        >
          {data.name}
        </TableCell>
        <TableCell align="right">{data.size}</TableCell>
        <TableCell align="right">{data.type || "Folder"}</TableCell>
        <TableCell align="right">
          <div className="flex justify-end relative">
            {showDrop && (
              <Dropdown
                left={nameLocation === "storage" ? "40px" : "-50px"}
                top="0"
                handleOptions={handleOptions}
                move={nameLocation !== "storage" ? true : false}
                duplicate={nameLocation !== "storage" ? true : false}
              />
            )}
            <div
              onClick={() => setShowDrop(true)}
              className={`flex justify-center p-[5px] w-[30px] rounded hover:bg-[${primaryColor}] hover:text-white cursor-pointer`}
            >
              <Options3Points />
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default RowProject;
