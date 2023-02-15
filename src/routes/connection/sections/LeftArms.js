import { useState } from "react";

//Elements
import Arm from "../elements/Arm";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { selectIn } from "../../../features/connect/connect";

//Icons
import Icons from "../icons";

//Helpers
import { handleMargin, handleMarginText } from "../../../helpers";

const LeftArms = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);

  const dataLeft = useSelector((state) => state.connect.connectors_in);
  const section = useSelector((state) => state.connect.indexIn);
  const filterIn = useSelector((state) => state.connect.filterIn);
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const keys = [];
  for (const property in dataLeft) {
    keys.push({ name: property });
  }

  var dataFiltered = keys;

  if (filterIn) {
    dataFiltered = keys.filter((item) => item.name.includes(filterIn));
  }

  const keysSubstract = dataFiltered.slice(section.init, section.finish);

  const validateSelected = (name) => {
    if (selected === name || dataLeft[name]?.active) {
      return true;
    }
  };

  const selectConnectIn = (name) => {
    setSelected(name);
    dispatch(selectIn(name));
  };

  const unSelectConnectIn = (name) => {
    setSelected(name);
    dispatch(selectIn(name));
  };

  const handleOptArm = (index) => {
    if (index == 0) return "l1";
    if (index == 1) return "l2";
    if (index == 2) return "centerL";
    if (index == 3) return "l3";
    if (index == 4) return "l4";
  };

  return (
    <div className="absolute" style={{ transform: "translate(225px, 30px)" }}>
      {keysSubstract.map((item, index) => {
        return (
          <div className="relative" key={index + item.name}>
            <div
              className={`absolute p-[2px] w-[200px] flex items-center cursor-pointer ${
                validateSelected(item.name) ? "bg-color-primary" : "bg-white"
              }`}
              style={{
                left: 0,
                zIndex: 10,
                marginTop: handleMarginText(index),
                borderRadius: "50px",
                marginLeft: "-170px",
                boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
                background: validateSelected(item.name) && primaryColor
              }}
              onMouseEnter={() => selectConnectIn(item.name)}
              onMouseLeave={() => unSelectConnectIn(null)}
            >
              <div
                className={`w-[148px] text-[14px] ml-[2px] px-2 ${
                  validateSelected(item.name) && "text-white"
                }`}
              >
                {item.name}
              </div>
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
                  color={validateSelected(item.name) ? primaryColor : "white"}
                />
              </div>
              {selected === item.name && (
                <div className="absolute ml-[210px] w-[40px] h-[40px] rounded-[100px] bg-color-primary flex justify-center items-center text-white"
                style={{ background: primaryColor }}
                >
                  {dataLeft[selected].count}
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

export default LeftArms;
