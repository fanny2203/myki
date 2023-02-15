import { useLocation, useNavigate } from "react-router-dom";

//Externals
import { TextField, Box } from "@mui/material";

//Helpers
import { getBaseRoute } from "../../../helpers";

//Globals
import { useSelector } from "react-redux";

//Icons
import {
  SearchIcon,
  ColItems,
  ListItems,
  AlertErrorTrinagleIcon,
  RightArrow,
} from "../../../resources/icon";

const HeaderOne = ({
  mode = "dir",
  changeMode,
  handleSearch,
  title = "My Projects",
}) => {
  const location = useLocation();
  const currentLocation = location?.pathname.split("/");
  const nameLocation = currentLocation[currentLocation.length - 1];

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const navigate = useNavigate();

  const baseRoute = getBaseRoute();

  return (
    <div className="flex justify-between w-full p-[10px] h-[69px] pb-[20px] border-b border-color-primary" style={{borderColor: primaryColor}}>
      <p className="text-xl self-end">{title}</p>
      <div className="flex items-end">
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
            onChange={handleSearch}
          />
        </Box>

        {nameLocation === "connectors" && (
          <button
            className="flex items-center text-color-primary p-1 px-3 border border-color-primary rounded-[100px]"
            onClick={() => navigate(`${baseRoute}/projects`)}
            style={{ color: primaryColor, borderColor: primaryColor }}
          >
            <p className="text-color-primary mr-[5px] mt-[-3px]" style={{ color: primaryColor }}>
              Manage projects
            </p>
            <RightArrow />
          </button>
        )}

        {nameLocation !== "connectors" && (
          <>
            <div
              className={`flex justify-center items-center rounded cursor-pointer h-[30px] w-[30px] mr-[10px] ${
                mode === "error" && "bg-color-primary"
              }`}
              style={{ background: mode === "error" && primaryColor }}
              onClick={() => changeMode("error")}
            >
              <div className={`${mode === "error" && "text-white"}`}>
                <AlertErrorTrinagleIcon />
              </div>
            </div>
            <div
              className={`flex justify-center items-center rounded cursor-pointer h-[30px] w-[30px] mr-[10px] ${
                mode === "dir" && "bg-color-primary"
              }`}
              style={{ background: mode === "dir" && primaryColor }}
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
              style={{ background: mode === "list" && primaryColor }}
              onClick={() => changeMode("list")}
            >
              <div className={`${mode === "list" && "text-white"}`}>
                <ListItems />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderOne;
