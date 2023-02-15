//Globals
import { useSelector } from "react-redux";

//Icons
import { CheckIcon } from "../../../resources/icon";

const ItemNewRole = ({ data, colorCheck, toggleValue }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div
      className="mb-[10px] items-center border rounded-[5px] flex h-[60px]"
      style={{ borderColor: primaryColor }}
    >
      <div className=" flex items-center w-[30%] px-[10px]">
        <div
          className="mr-[10px] h-[40px] w-[40px] rounded-[100px]"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <p>{data.key}</p>
      </div>
      <div className="flex w-[30%]">
        <p className="mr-[10px]">check all</p>
        <p>Uncheck all</p>
      </div>
      <div className="flex justify-start w-[450px]">
        {data.value.map((permission, index) => (
          <div className="flex" key={permission.key + index}>
            <div
              key={index + permission.key}
              className="flex items-center justify-center mr-[10px] ml-[10px] h-[25px] w-[25px] border rounded text-white"
              style={{
                borderColor: colorCheck,
                background: permission.value === "True" && colorCheck,
                cursor: permission.value === "True" && "pointer",
              }}
              onClick={() =>
                toggleValue({
                  parent: data.key,
                  child: { key: permission.key, value: permission.value },
                })
              }
            >
              <CheckIcon />
            </div>
            <p>{permission.key}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemNewRole;
