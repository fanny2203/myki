import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Globals
import { useSelector } from "react-redux";

//Icons
import {
  CollapseIcon,
  PlusSquare,
  CloudIcon,
  DeleteIcon,
} from "../../../resources/icon";

//Elements
import ItemSidebar from "../elements/ItemSidebar";

const SideStore = () => {
  const [collapse, setCollapse] = useState(false);

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const spaceNameLocal = localStorage.getItem("spacename");
  const spaceName = spaceNameLocal.slice(1, -1);

  const navigation = useNavigate();

  const goRoot = () => {
    navigation(`/${spaceName}/dashboard/storage`);
  };

  const goUpgrade = () => {
    navigation(`/${spaceName}/dashboard/storage/upgrade`);
  };

  const goRecycle = () => {
    navigation(`/${spaceName}/dashboard/storage/recyclebin`);
  };

  return (
    <div
      className="bg-gray"
      style={{
        transition: "width 0.5s",
        width: collapse ? "100px" : "240px",
        height: "100%",
        border: "1px solid gray",
        borderLeft: "none",
      }}
    >
      <div
        className={`flex justify-between p-[20px] pb-[23px] border-b border-gray2`}
      >
        {!collapse && <p className="text-color-primary font-medium" style={{ color: primaryColor }}>Store</p>}
        <div
          onClick={() => setCollapse(!collapse)}
          className={`cursor-pointer ${
            collapse && "flex items-center justify-center w-full h-full"
          }`}
          style={{ transform: collapse ? "rotate(90deg)" : "rotate(270deg)" }}
        >
          <CollapseIcon />
        </div>
      </div>
      <div className="p-[20px] border-b border-gray2 pb-[0px]">
        <ItemSidebar
          collapse={collapse}
          text="Root"
          icon={<PlusSquare />}
          action={goRoot}
        />
        <ItemSidebar
          collapse={collapse}
          text="Recycle Bin"
          icon={<DeleteIcon />}
          action={goRecycle}
        />
        <ItemSidebar
          collapse={collapse}
          text="Upgrade Storage"
          icon={<CloudIcon />}
          action={goUpgrade}
        />
      </div>
    </div>
  );
};

export default SideStore;
