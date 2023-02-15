import { useState } from "react";

//Elements
import Arm from "../elements/Arm";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { selectOut } from "../../../features/connect/connect";

//Icons
import Icons from "../icons";

//Helpers
import { handleMargin, handleMarginText } from "../../../helpers";

const RigthArms = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);

  const dataRigth = useSelector((state) => state.connect.connectors_out);
  const section = useSelector((state) => state.connect.indexOut);
  const filterOut = useSelector((state) => state.connect.filterOut);
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const keys = [];
  for (const property in dataRigth) {
    keys.push({ name: property });
  }

  var dataFiltered = keys;

  if (filterOut) {
    dataFiltered = keys.filter((item) => item.name.includes(filterOut));
  }

  const keysSubstract = dataFiltered.slice(section.init, section.finish);

  const validateSelected = (name) => {
    if (selected === name || dataRigth[name]?.active) {
      return true;
    }
  };

  const selectConnectOut = (name) => {
    setSelected(name);
    dispatch(selectOut(name));
  };

  const unSelectConnectOut = (name) => {
    setSelected(name);
    dispatch(selectOut(name));
  };

  function handleOptArm(index) {
    if (index == 0) return "r1";
    if (index == 1) return "r2";
    if (index == 2) return "centerR";
    if (index == 3) return "r3";
    if (index == 4) return "r4";
  }

  return (
    <div
      className="h-[150px] w-[150px] absolute"
      style={{ transform: "translate(545px, 30px)" }}
    >
      {keysSubstract.map((item, index) => {
        return (
          <div className="relative" key={`${index}${item.name}`}>
            <div
              className={`absolute p-[2px] w-[200px] flex items-center cursor-pointer ${
                validateSelected(item.name) ? "bg-color-primary" : "bg-white"
              }`}
              style={{
                left: 0,
                zIndex: 10,
                marginTop: handleMarginText(index),
                borderRadius: "50px",
                marginLeft: "205px",
                boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
                background: validateSelected(item.name) && primaryColor
              }}
              onMouseEnter={() => selectConnectOut(item.name)}
              onMouseLeave={() => unSelectConnectOut(null)}
            >
              <div
                className={`w-[50px] h-[50px] rounded-[100px] flex justify-center items-center ${
                  validateSelected(item.name) ? "bg-white" : "bg-color-primary"
                }`}
                style={{
                  background: !validateSelected(item.name) && primaryColor
                }}
              >
                <Icons
                  icon="transfer"
                  color={validateSelected(item.name) ? {primaryColor} : "white"}
                />
              </div>
              <div
                className={`w-[148px] text-[14px] ml-[2px] px-2 ${
                  validateSelected(item.name) && "text-white"
                }`}
              >
                {item.name}
              </div>
              {selected === item.name && (
                <div className="absolute ml-[-50px] w-[40px] h-[40px] rounded-[100px] bg-color-primary flex justify-center items-center text-white"
                style={{ background: primaryColor }}
                >
                  {dataRigth[selected].count}
                </div>
              )}
            </div>
            <div
              className="absolute"
              style={{
                marginTop: handleMargin(index),
                zIndex: 1,
              }}
            >
              <Arm
                type={handleOptArm(index)}
                isSelected={validateSelected(item.name)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RigthArms;
