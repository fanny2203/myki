//Icons
import { RightArrow } from "../../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

const SourceDestiny = ({ setup }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <div className="flex p-[20px] w-full bg-gray mt-[10px] relative">
      <button
        className="flex items-baseline text-color-primary absolute"
        style={{
          right: "20px",
          bottom: "20px",
          color: primaryColor,
        }}
      >
        <p className="mr-[5px]">Manage files</p>
        <RightArrow />
      </button>
      <div
        className=" scroll w-[50%] mb-[30px] h-[170px]"
        style={{ overflowY: "auto" }}
      >
        <p className="mb-[10px]">Source</p>
        {setup?.in?.map((section, index) => (
          <div key={index} className="flex w-full">
            <p
              className="text-color-primary w-[50%]"
              style={{ color: primaryColor }}
            >
              {section.name}
            </p>
            <p>{section.value}</p>
          </div>
        ))}
      </div>
      <div
        className=" scroll w-[50%] mb-[30px] h-[170px]"
        style={{ overflowY: "auto" }}
      >
        <p className="mb-[10px]">Destiny</p>
        {setup?.out?.map((section, index) => (
          <div key={index} className="flex w-full">
            <p
              className="text-color-primary w-[50%]"
              style={{ color: primaryColor }}
            >
              {section.name}
            </p>
            <p>{section.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceDestiny;
