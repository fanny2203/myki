//Globals
import { useSelector } from "react-redux";

const ItemStep = ({ step, completed }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`flex items-center justify-center w-[40px] h-[40px] rounded-[100px] ${
        completed ? "bg-color-primary" : "bg-white border border-color-primary"
      }`}
      style={{ zIndex: 5, background:  completed && primaryColor, borderColor: !completed && primaryColor }}
    >
      <p
        className={`text-xl ${completed ? "text-white" : "text-color-primary"}`}
        style={{ color: completed && primaryColor }}
      >
        {step}
      </p>
    </div>
  );
};

export default ItemStep;
