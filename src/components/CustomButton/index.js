//Components
import Icons from "../Icons";

//Globals
import { useSelector } from "react-redux";

const CustomButton = ({
  text,
  icon,
  showIcon,
  action,
  colorIcon = "black",
  primary,
  showBorder = true,
}) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleAction = () => {
    action && action();
  };

  const handleBorder = () => {
    if (showBorder) {
      if (!primary) {
        return `1px solid ${primaryColor}`;
      }
      return "none";
    }
  };

  return (
    <button
      className={`flex items-center radius px-3 h-[30px]`}
      style={{
        borderRadius: "100px",
        border: handleBorder(),
        background: primary && primaryColor,
      }}
      onClick={() => handleAction()}
    >
      <p
        className="text-white m-[0px] mr-[5px] mt-[-2px]"
        style={{ color: primary ? "#ffffff" : primaryColor }}
      >
        {text}
      </p>
      {showIcon && (
        <div className="mt-0.5 ml-2">
          <Icons icon={icon} color={colorIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
