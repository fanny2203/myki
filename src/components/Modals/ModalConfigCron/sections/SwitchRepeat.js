//Globals
import { useSelector } from "react-redux";

const SwitchRepeat = ({ repeat, toggleSwitch }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div className="flex mt-[20px] justify-between">
      <div className="flex">
        <p>Repeat</p>
        <div
          onClick={() => toggleSwitch()}
          className={`flex ml-[5px] w-[50px] p-[3px] rounded-[50px] h-[27px] cursor-pointer ${
            repeat
              ? "bg-color-primary justify-end"
              : "justify-start bg-color-danger"
          }`}
          style={{ background: repeat && primaryColor }}
        >
          <div className={`w-[20px] h-[20px] rounded-[100px] bg-white`}></div>
        </div>
      </div>
      <p>(UTC-06:00) Guadalajara, Mexico City, Monterrey</p>
    </div>
  );
};

export default SwitchRepeat;
