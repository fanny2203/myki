import { closeSession } from "../../../helpers";

//Globals
import { useSelector } from "react-redux";

const ItemLanguage = ({ data, icon = false, action, languageSelected }) => {
  const handleAction = (value) => {
    console.log(value);
    if (value === "out") closeSession();
    action && action(value);

    // window.googleTranslateElementInit(value)
  };

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div
      className="flex justify-between items-center w-full mt-2 cursor-pointer"
      onClick={() => handleAction(data.value)}
    >
      <div className="flex">
        <p className="ml-2">{data.name}</p>
      </div>
      {data.value === languageSelected && (
        <div
          className="h-[10px] w-[10px]"
          style={{ borderRadius: "100px", background: primaryColor }}
        ></div>
      )}
    </div>
  );
};

export default ItemLanguage;
