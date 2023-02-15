import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../stylesStorage.css";

import CustomButton from "../../../components/CustomButton";

//Icons
import { SearchIcon, ColItems, ListItems } from "../../../resources/icon";

//Externals
import { TextField, Box } from "@mui/material";

//Globasl
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setModaUploadFile } from "../../../features/modal/modalsStorage";

//Icons
import { DeleteIcon } from "../../../resources/icon";

const HeaderStorage = ({ mode, changeMode, updateFilter }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const upload = useSelector((state) => state.handleFile.upload);
  const location = useLocation();
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const destructuredLocation = location?.pathname.split("/");
  const pathname = destructuredLocation[destructuredLocation.length - 1];

  const spaceNameLocal = localStorage.getItem("spacename");
  const spaceName = spaceNameLocal.slice(1, -1);

  const handleUpload = () => {
    dispatch(setModaUploadFile(true));
  };

  const switchButton = () => {
    if (pathname === "details") {
      if (!upload) {
        return (
          <div className="mr-[10px]">
            <CustomButton
              action={() => handleUpload()}
              text="Upload file"
              primary={true}
              icon="cloudIcon"
              showIcon={true}
              colorIcon="#ffffff"
            />
          </div>
        );
      } else {
        return (
          <div className="flex mr-[15px]">
            <p className="text-color-primary" style={{ color: primaryColor }}>Uploading file</p>
            <div className="spinner">
              <div className="bounce1 bg-color-primary mr-[5px]" style={{ background: primaryColor }}></div>
              <div className="bounce2 bg-color-primary mr-[5px]" style={{ background: primaryColor }}></div>
              <div className="bounce3 bg-color-primary mr-[5px]" style={{ background: primaryColor }}></div>
            </div>
          </div>
        );
      }
    } else if (pathname === "recyclebin") {
      return (
        <div className="mr-[10px]">
          <button className="flex items-center bg-color-danger py-[3px] px-[20px] rounded-[50px] text-white">
            <DeleteIcon />
            <p className="ml-[10px]">Empty recycle bin</p>
          </button>
        </div>
      );
    }
  };

  const validateTitle = () => {
    if (pathname === "recyclebin") {
      return "Recycle Bin";
    } else {
      return `Root / ${location?.state?.path?.name || ""}`;
    }
  };

  const goUpgrade = () => {
    navigation(`/${spaceName}/dashboard/storage/upgrade`);
  };

  return (
    <div className="flex justify-between w-full p-[10px] h-[69px] pb-[20px] border-b border-color-primary" style={{borderColor: primaryColor}}>
      <p className="text-xl self-end">{validateTitle()}</p>
      <div className="flex items-end">
        {switchButton()}
        <div className="mr-[10px]">
          <CustomButton
            text="Update storage"
            primary={true}
            action={goUpgrade}
          />
        </div>
        <Box
          sx={{
            display: "flex",
            width: "250px",
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
            sx={{ width: "250px", height: "40px", marginLeft: "5px" }}
            onChange={updateFilter}
          />
        </Box>
        <div
          className={`flex justify-center items-center rounded cursor-pointer h-[30px] w-[30px] mr-[10px] ${
            mode === "dir" && "bg-color-primary"
          }`}
          style={{ background: mode == "dir" && primaryColor }}
          onClick={() => changeMode("dir")}
        >
          <div className={`${mode === "dir" && "text-white"}`}>
            <ColItems />
          </div>
        </div>
        <div
          className={`flex justify-center items-center rounded cursor-pointer h-[30px] w-[30px] ${
            mode === "list" && "bg-color-primary"
          }`}
          style={{ background: mode == "list" && primaryColor }}
          onClick={() => changeMode("list")}
        >
          <div className={`${mode === "list" && "text-white"}`}>
            <ListItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStorage;
