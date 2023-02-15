//Icons
import { TransferIcon } from "../../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

const ItemSectionArm = ({ text, left = true }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`absolute p-[2px] w-[200px] flex items-center cursor-pointer bg-white`}
      style={{
        left: 0,
        zIndex: 10,
        borderRadius: "50px",
        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      {left && (
        <div className={`w-[148px] text-[14px] ml-[2px] px-2`}>{text}</div>
      )}
      <div
        className={`w-[50px] h-[50px] rounded-[100px] flex justify-center items-center bg-color-primary`}
        style={{ background: primaryColor }}
      >
        <div className="text-white">
          <TransferIcon />
        </div>
      </div>
      {!left && (
        <div className={`w-[148px] text-[14px] ml-[2px] px-2`}>{text}</div>
      )}
    </div>
  );
};

export default ItemSectionArm;
