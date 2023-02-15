import { useState } from "react";

//Components
import AddTag from "../../../components/Modals/AddTag";
import DeleteTag from "../../../components/Modals/DeleteTag";

//Icons
import {
  ProyectIcon,
  Options3Points,
  AlertErrorTrinagleIcon,
  AlertErrorCircleIcon,
} from "../../../resources/icon";

//Helpers
import { transformDate } from "../../../helpers";

//Globals
import { useSelector } from "react-redux";

//Components
import BtnTags from "../../../components/BtnTags";
import Dropdown from "../../../components/Dropdowns/DropdownStorage";

const DirProject = ({
  data,
  goToConnectors,
  handleOptions,
  showModalAddTag,
  closeModalAddTag,
  porjectSelected,
}) => {
  const [drop, setDrop] = useState("");

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const selectedDrop = (value, event) => {
    event.stopPropagation();
    setDrop(value);
  };

  const handleAction = (event) => {
    handleOptions(event, data);
  };

  const addTag = () => {
    showModalAddTag(data.id);
  };

  const handleCloseModal = () => {
    closeModalAddTag();
  };

  return (
    <div
      className="bg-gray w-[255px] h-[240px] p-[10px] py-[20px] rounded cursor-pointer"
      onClick={() => goToConnectors(data)}
    >
      <AddTag
        showModal={porjectSelected === data.id}
        closeModal={handleCloseModal}
        data={data}
      />
      <div className="flex justify-between">
        <ProyectIcon />
        <div className="flex">
          <BtnTags tags={data.tags} addTag={addTag} />
          <div
            className="flex justify-center ml-[20px] w-[15px] relative"
            onClick={(e) => selectedDrop(data.name, e)}
            tabIndex={0}
            onBlur={() => setDrop(false)}
          >
            <Options3Points />
            {drop === data.name && (
              <Dropdown
                left="-130px"
                top="0px"
                details={false}
                move={false}
                duplicate={false}
                download={false}
                handleOptions={handleAction}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-gray2 mr-[3px]">Name: </p>
        <p
          className="w-[185px]"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {data.name}
        </p>
      </div>
      <div className="flex items-center mt-[10px]">
        <p className="text-gray2 mr-[3px]">Create on: </p>
        <p>{transformDate(data.date)} </p>
      </div>
      <div className="flex items-center pt-[20px] border-t border-t-gray2 mt-[20px]">
        <p className="mr-[5px]">Connections: </p>
        <div
          className="flex justify-center items-center mr-[5px] w-[23px] h-[23px] rounded-[100px] bg-color-primary text-white"
          style={{ background: primaryColor }}
        >
          {data.collections}
        </div>
        <div className="flex items-center mr-[5px] text-color-danger">
          <AlertErrorTrinagleIcon />
          <p className="ml-[5px] text-black">12</p>
        </div>
        <div className="flex items-center text-color-warning">
          <AlertErrorCircleIcon />
          <p className="ml-[5px] text-black">16</p>
        </div>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-gray2 mr-[3px]">Tables: </p>
        <p>8</p>
      </div>
    </div>
  );
};

export default DirProject;
