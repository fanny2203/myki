//Icons
import { ReloadIcon2, PencilIcon } from "../../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

const Btns = ({ initTestConnection }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <div className="flex justify-end w-full mt-[10px]">
      <button className="flex items-center p-2 py-1.5 rounded-[50px] mr-[10px]">
        <p
          className="text-color-primary mt-[-2px]"
          style={{ color: primaryColor }}
        >
          Edit details
        </p>
        <div
          className="ml-[5px] text-color-primary"
          style={{ color: primaryColor }}
        >
          <PencilIcon />
        </div>
      </button>
      <button
        className="flex items-center border border-color-primary p-2 py-1.5 rounded-[50px]"
        style={{ borderColor: primaryColor }}
        onClick={() => initTestConnection()}
      >
        <p
          className="text-color-primary mt-[-2px]"
          style={{ color: primaryColor }}
        >
          Test connection
        </p>
        <div
          className="ml-[5px] text-color-primary"
          style={{ color: primaryColor }}
        >
          <ReloadIcon2 />
        </div>
      </button>
    </div>
  );
};

export default Btns;
