import ItemStep from "../ConnectByMongo/elements/ItemStep";

//Globals
import { useSelector } from "react-redux";

const StepByStep = ({ one, two, three, four, five }) => {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div className="flex justify-between w-full mb-[20px]">
      <ItemStep step="1" completed={one} />
      <ItemStep step="2" completed={two} />
      <ItemStep step="3" completed={three} />
      <ItemStep step="4" completed={four} />
      <ItemStep step="5" completed={five} />
      <div
        className="absolute border-b border-color-primary mt-[20px]"
        style={{ width: "calc(100% - 40px)", zIndex: 0, borderColor: primaryColor }}
      ></div>
    </div>
  );
};

export default StepByStep;
