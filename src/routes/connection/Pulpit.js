import LeftArms from "./sections/LeftArms";
import RigthArms from "./sections/RigthArms";
import ImageDB from "./elements/ImageDB";

//Components
import CustomButton from "../../components/CustomButton";

//Externals
import { TextField, Box } from "@mui/material";

//Icons
import Icons from "./icons";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import {
  setFilterIn,
  setFilterOut,
  setIndexIn,
} from "../../features/connect/connect";
import { showModalNewConnection } from "../../features/modal/modal";

const Pulpit = () => {
  const dispatch = useDispatch();
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleChangeIn = (event) => {
    dispatch(setFilterIn(event.target.value));
  };

  const handleChangeOut = (event) => {
    dispatch(setFilterOut(event.target.value));
  };

  const showNext = () => {
    dispatch(setIndexIn(true));
  };

  const openModalNewConnection = () => {
    dispatch(showModalNewConnection());
  };

  return (
    <div className="h-full w-full flex flex-col relative">
      <div style={{ zIndex: 1 }}>
        <ImageDB />
      </div>
      <div className="flex w-full h-[50px] px-4" style={{ zIndex: 10 }}>
        <div className="w-[50%] flex items-center">
          <p className="text-lg">Source</p>
        </div>
        <div className="w-[50%] flex items-center justify-between">
          <p className="text-lg">Destination</p>
          <CustomButton
            text="Add a new connector"
            showIcon={true}
            icon={"rigthArrow"}
            colorIcon="#ffffff"
            primary={true}
            action={openModalNewConnection}
          />
          <CustomButton
            text="Enter code"
            showIcon={true}
            icon={"key"}
            colorIcon={primaryColor}
            primary={false}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 50px)",
          zIndex: 10,
        }}
      >
        <div
          className="flex flex-col items-center relative"
          style={{ height: "620px" }}
        >
          <div
            className="flex items-center justify-around w-full"
            style={{ top: 0 }}
          >
            <div className="w-[200px] flex justify-center cursor-pointer">
              <Box
                sx={{
                  display: "flex",
                  width: "250px",
                  alignItems: "flex-end",
                }}
              >
                <Icons icon="search" color="gray" />
                <TextField
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                  sx={{ width: "250px", height: "40px", marginLeft: "5px" }}
                  onChange={handleChangeIn}
                />
              </Box>
              <div
                style={{
                  transform: "rotate(-180deg)",
                  marginBottom: "-10px",
                }}
              >
                <Icons icon="controllArrow" color={primaryColor} />
              </div>
            </div>
            <div className="w-[200px] flex justify-center">
              <div className="w-[200px] flex justify-center cursor-pointer">
                <Box
                  sx={{
                    display: "flex",
                    width: "250px",
                    alignItems: "flex-end",
                  }}
                >
                  <Icons icon="search" color="gray" />
                  <TextField
                    id="standard-basic"
                    label="Search"
                    variant="standard"
                    sx={{ width: "250px", height: "40px", marginLeft: "5px" }}
                    onChange={handleChangeOut}
                  />
                </Box>
                <div
                  style={{
                    transform: "rotate(-180deg)",
                    marginBottom: "-10px",
                  }}
                >
                  <Icons icon="controllArrow" color={primaryColor} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[1000px]">
            <LeftArms />
            <RigthArms />
            <div
              className="absolute border-[8px] bg-white border-color-primary rounded-[100px] h-[150px] w-[150px]"
              style={{
                zIndex: 10,
                transform: "translate(425px, 190px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: primaryColor
              }}
            >
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M71.6668 110.625C70.7603 110.625 69.8742 110.894 69.1205 111.397C68.3667 111.901 67.7793 112.617 67.4324 113.454C67.0855 114.292 66.9947 115.213 67.1716 116.103C67.3484 116.992 67.7849 117.808 68.4259 118.449C69.0669 119.09 69.8836 119.527 70.7727 119.704C71.6617 119.88 72.5833 119.79 73.4208 119.443C74.2583 119.096 74.9741 118.508 75.4777 117.755C75.9814 117.001 76.2502 116.115 76.2502 115.208C76.2502 113.993 75.7673 112.827 74.9077 111.967C74.0482 111.108 72.8824 110.625 71.6668 110.625ZM90.0002 44.1667C71.6668 44.1667 53.3335 50.4459 53.3335 62.5V117.5C53.3335 129.554 71.6668 135.833 90.0002 135.833C108.333 135.833 126.667 129.554 126.667 117.5V62.5C126.667 50.4459 108.333 44.1667 90.0002 44.1667ZM117.5 117.5C117.5 120.754 107.05 126.667 90.0002 126.667C72.9502 126.667 62.5002 120.754 62.5002 117.5V102.513C71.0805 106.591 80.503 108.586 90.0002 108.333C99.4973 108.586 108.92 106.591 117.5 102.513V117.5ZM117.5 90C117.5 93.2542 107.05 99.1667 90.0002 99.1667C72.9502 99.1667 62.5002 93.2542 62.5002 90V75.0125C71.0805 79.0915 80.503 81.0859 90.0002 80.8334C99.4973 81.0859 108.92 79.0915 117.5 75.0125V90ZM90.0002 71.6667C72.9502 71.6667 62.5002 65.7542 62.5002 62.5C62.5002 59.2459 72.9502 53.3334 90.0002 53.3334C107.05 53.3334 117.5 59.2459 117.5 62.5C117.5 65.7542 107.05 71.6667 90.0002 71.6667ZM71.6668 83.125C70.7603 83.125 69.8742 83.3938 69.1205 83.8975C68.3667 84.4011 67.7793 85.1169 67.4324 85.9544C67.0855 86.7919 66.9947 87.7134 67.1716 88.6025C67.3484 89.4916 67.7849 90.3083 68.4259 90.9493C69.0669 91.5903 69.8836 92.0268 70.7727 92.2036C71.6617 92.3805 72.5833 92.2897 73.4208 91.9428C74.2583 91.5959 74.9741 91.0084 75.4777 90.2547C75.9814 89.501 76.2502 88.6149 76.2502 87.7084C76.2502 86.4928 75.7673 85.327 74.9077 84.4674C74.0482 83.6079 72.8824 83.125 71.6668 83.125Z"
                  fill={primaryColor}
                />
              </svg>
            </div>
          </div>
          <div
            className="flex items-center justify-around absolute w-full h-[50px]"
            style={{ bottom: 0 }}
          >
            <div className="w-[200px] flex justify-center">
              <div className="cursor-pointer" onClick={() => showNext()}>
                <Icons icon="controllArrow" color={primaryColor} />
              </div>
            </div>
            <div className="w-[200px] flex justify-center">
              <div className="cursor-pointer">
                <Icons icon="controllArrow" color={primaryColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pulpit;
