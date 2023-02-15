import { useState } from "react";
import { useNavigate } from "react-router-dom";


//Externals
import { TextField } from "@mui/material";

//Elements
import Arms from "./elements/Arms";

//Components
import CustomButton from "../../components/CustomButton";

//Icons
import { ProyectIcon, TransferIcon, CheckIcon } from "../../resources/icon";

//Globals
import { useDispatch, useSelector } from "react-redux";
import { hiddeModalNewConnection } from "../../features/modal/modal";

const connectsSections = [
  { name: "Connect by Mongo DB", mt: "0px", to: "connect/mongo" },
  { name: "Connect by Drive", mt: "75px", to: "connect/drive" },
  { name: "Connect by FTP", mt: "190px", to: "connect/mongo" },
  { name: "Connect by MySQL", mt: "85px", to: "connect/mongo" },
];

const ModalNewConnection = () => {
  const dispatch = useDispatch();
  const pos = useSelector((state) => state.modal.positionModalNewConnection);
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const [isPrivate, setIsPrivate] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = (section) => {
    dispatch(hiddeModalNewConnection());
    navigate(section.to, { state: { isPrivate } });
  };

  return (
    <div
      className="flex w-full h-full fixed justify-end"
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: `translateX(${pos})`,
        zIndex: 100,
      }}
    >
      <div
        className="scroll flex flex-col w-[550px] h-full bg-white p-[20px]"
        style={{ zIndex: 30, overflowY: "auto" }}
      >
        <div className="flex items-center">
          <p className="text-xl">Add a new connector</p>
          <div
            className="flex items-center ml-[20px] cursor-pointer"
            onClick={() => setIsPrivate(false)}
          >
            <div
              className={`flex items-center justify-center w-[20px] h-[20px] rounded-[100px] text-white ${
                !isPrivate && "bg-color-primary"
              }`}
              style={{
                border: isPrivate && "1px solid gray",
              }}
            >
              <CheckIcon />
            </div>
            <p className="ml-[5px]">Public</p>
          </div>
          <div
            className="flex items-center ml-[20px] cursor-pointer"
            onClick={() => setIsPrivate(true)}
          >
            <div
              className={`flex items-center justify-center w-[20px] h-[20px] rounded-[100px] text-white ${
                isPrivate && "bg-color-primary"
              }`}
              style={{
                border: !isPrivate && "1px solid gray",
                background: primaryColor
              }}
            >
              <CheckIcon />
            </div>
            <p className="ml-[5px]">Private</p>
          </div>
        </div>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          sx={{ marginBottom: "10px" }}
        />
        <div className="flex">
          <div className="text-color-primary" style={{ color: primaryColor }}>
            <ProyectIcon />
          </div>
          <p className="ml-[5px]">Project</p>
        </div>
        <div className="flex w-full justify-center mt-[15px]">
          <div className="flex">
            <div className="mt-[10px]">
              <Arms />
            </div>
            <div>
              {connectsSections.map((section, index) => (
                <div
                  onClick={() => handleNavigate(section)}
                  key={`${section.name}${index}`}
                  className={`p-[2px] w-[200px] border border-gray flex items-center cursor-pointer bg-white hover:border hover:border-color-primary`}
                  style={{
                    left: 0,
                    zIndex: 10,
                    borderRadius: "50px",
                    marginLeft: "0px",
                    boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
                    marginTop: section.mt,
                    borderColor: primaryColor
                  }}
                >
                  <div
                    className={`w-[50px] h-[50px] rounded-[100px] flex justify-center items-center bg-color-primary`}
                    style={{ background: primaryColor }}
                  >
                    <div className="text-white">
                      <TransferIcon />
                    </div>
                  </div>
                  <div className={`w-[148px] text-[14px] ml-[2px] px-2`}>
                    {section.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-[20px]">
          <p className="text-color-primary" style={{ color: primaryColor }}>Cancel</p>
          <div className="flex items-end">
            <p className="text-color-primary mr-[20px]" style={{ color: primaryColor }}>Terms & conditions</p>
            <CustomButton
              text="save"
              showIcon={true}
              icon="rigthArrow"
              primary={true}
              colorIcon="#ffffff"
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => dispatch(hiddeModalNewConnection())}
        className="absolute w-full h-full "
        style={{
          zIndex: 20,
          background: "black",
          transition: `opacity ${pos === "0%" ? "1.5s" : "0s"} ease-in-out`,
          opacity: pos === "0%" ? 0.3 : 0,
        }}
      ></div>
    </div>
  );
};

export default ModalNewConnection;
