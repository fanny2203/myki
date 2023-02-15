import { useState } from "react";
import { useToastContext } from "../../../../context/ToastContext";
//Constants
import { STEPS, INFOSTEPSN } from "../../../../constants/stepsTutorial";
//Elements
import ItemStep from "./Elements/ItemStep";
//Sections
import Info from "./Sections/Info";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { getHeaders } from "../../../../helpers";

//Globals
import { useSelector } from "react-redux";

const Tutorial = () => {
  const [tutorial, setTutorial] = useLocalStorage("tutorial", null); // eslint-disable-line
  const addToast = useToastContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const next = () => {
    if (currentIndex < INFOSTEPSN.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      changeStatusTutorial();
    }
  };

  const changeStatusTutorial = () => {
    fetch(process.env.REACT_APP_BACKEND_URL_API + "tutorial/complete", {
      method: "GET",
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((tutorial) => {
        setTutorial(true);
        addToast(tutorial.message);
        setTimeout(() => window.location?.reload(), 2000);
      });
  };

  const changeIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex h-full w-full p-[20px] ">
      <div className="w-[30%] h-full">
        {currentIndex === 0 ? (
          <p className="text-[20px] text-color-primary mb-3" style={{ color: primaryColor }}>Introduction</p>
        ) : (
          <p className="text-[14px] text-color-primary mb-3 font-medium" style={{ color: primaryColor }}>
            Features
          </p>
        )}
        {STEPS.map((step, index) => (
          <ItemStep
            key={`${step.name}-${index}`}
            data={step}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
      <div className="flex justify-center w-[70%] h-full">
        <div
          className="flex flex-col items-center"
          style={{
            height: "calc(100vh - 130px)",
            width: "100%",
          }}
        >
          <Info
            currentIndex={currentIndex}
            changeIndex={changeIndex}
            next={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
