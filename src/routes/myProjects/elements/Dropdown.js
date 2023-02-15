//Icons
import { RightArrow } from "../../../resources/icon";

const Dropdown = ({ title, drop, action }) => {
  const validateColor = () => {
    if (title === "Errors") {
      return "border-color-danger";
    } else if (title === "Warnings") {
      return "border-color-warning";
    }
  };

  return (
    <>
      <div className="flex justify-between mt-[10px]">
        <p>{title}</p>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => action(title)}
        >
          <div
            className={`flex items-center justify-center border px-[10px] h-[20px] ${validateColor()}`}
          >
            5
          </div>
          <div
            className="ml-[10px]"
            style={{
              transform: "rotate(90deg)",
            }}
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div
        className="scroll mt-[5px]"
        style={{
          height: drop === title ? "100px" : "0px",
          overflow: drop === title ? "auto" : "hidden",
        }}
      >
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
      </div>
    </>
  );
};

export default Dropdown;
