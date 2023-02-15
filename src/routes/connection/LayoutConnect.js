// Styles
import "./ConnectionComponent.sass";

//Globals
import { useSelector } from "react-redux";

const LayoutConnect = (props) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <>
      <div className="newConnection-container">
        <div className="newConnection-details">{props.details}</div>
        <div className="scroll newConnection-information">{props.info}</div>
      </div>
      <div className="flex justify-end items-center bg-gray h-[50px]">
        <button
          className={`py-1 px-3 text-white mr-[30px] ${
            props.active ? "bg-color-primary" : "bg-gray2"
          }`}
          style={{ borderRadius: "90px", background: props.active && primaryColor}}
          onClick={props.buttonHandler}
        >
          {props.buttonText}
        </button>
      </div>
    </>
  );
};

export default LayoutConnect;
