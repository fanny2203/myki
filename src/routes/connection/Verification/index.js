//Components
import Loader from "../../../components/Spinner";
import CustomButton from "../../../components/CustomButton";

//Globals
import { useSelector } from "react-redux";

const testsSections = [
  { name: "Finding specified API" },
  { name: "Validating name range" },
  { name: "Cloud service provider test" },
  { name: "Data processing location" },
];

const Verification = () => {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div className="w-full h-full p-[20px]">
      <div
        className="flex w-full justify-between"
        style={{
          height: "80px",
        }}
      >
        <button className="w-[80px] h-[80px] rounded-[100px] border border-color-primary text-color-primary" style={{ color: primaryColor, borderColor: primaryColor }}>
          Connect source
        </button>
        <CustomButton
          text="Edit"
          icon="rigthArrow"
          showIcon={true}
          showBorder={false}
          colorIcon={primaryColor}
        />
      </div>
      <div className="" style={{ height: "calc(100% - 70px)" }}>
        <div className="flex flex-col justify-around items-center h-[45%] w-full">
          <p className="text-xl">Entry Test Connection</p>
          <div className="flex w-full justify-around">
            {testsSections.map((section, index) => (
              <div className="flex flex-col items-center">
                <Loader color={primaryColor} />
                <p>{section.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-around items-center h-[45%] w-full">
          <p className="text-xl">Destination Test Connection</p>
          <div className="flex w-full justify-around">
            {testsSections.map((section, index) => (
              <div className="flex flex-col items-center">
                <Loader color={primaryColor} />
                <p>{section.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-between w-[220px]">
            <CustomButton text="Create new" showBorder={true} />
            <CustomButton text="Continue" primary={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
