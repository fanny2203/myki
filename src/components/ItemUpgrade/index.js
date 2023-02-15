//Components
import CustomButton from "../CustomButton";

//Icons
import { CloudIcon } from "../../resources/icon";

//Globals
import { useSelector } from "react-redux";

const ItemUpgrade = ({ data }) => {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div className="flex flex-col justify-between items-center w-[220px] h-[350px] rpunded bg-gray p-[20px]">
      <p className="text-lg font-medium">{data.name}</p>
      <div className="flex items-center justify-center rounded border w-full h-[35px] border-color-primary text-color-primary" style={{ color: primaryColor, borderColor: primaryColor }}>
        <CloudIcon />
        <p className="text-color-primary ml-[10px]" style={{ color: primaryColor }}>{data.gb}</p>
      </div>
      <p className="text-center text-[14px] font-medium">{data.desc}</p>
      <div>
        {data.features.map((feature, index) => (
          <div key={feature.name + index} className="flex items-start">
            <div className="w-[5px] h-[5px] mt-[8px] rounded bg-black rounded-[100px]"></div>
            <p
              className="text-[13px] m-[0px] ml-[5px]"
              key={index + feature.name}
            >
              {feature.name}
            </p>
          </div>
        ))}
      </div>
      <div>
        {data.status ? (
          <button className="p-[3px] px-[15px] bg-gray2 rounded-[50px] text-white">
            Acquired
          </button>
        ) : (
          <CustomButton
            text="Purchase"
            primary={true}
            showIcon={true}
            icon="rigthArrow"
            colorIcon="#ffffff"
          />
        )}
      </div>
    </div>
  );
};

export default ItemUpgrade;
