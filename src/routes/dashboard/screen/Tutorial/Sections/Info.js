//Constants
import { INFOSTEPSN } from "../../../../../constants/stepsTutorial";
//Icons
import { RightArrow } from "../../../../../resources/icon";
//Images
import imgIntroduction from "../../../../../resources/images/tutorial/introduction.png";
import imgConnect from "../../../../../resources/images/tutorial/connect.png";
import imgStorage from "../../../../../resources/images/tutorial/storage.png";
import imgModel from "../../../../../resources/images/tutorial/model.png";
import imgProjects from "../../../../../resources/images/tutorial/projects.png";
import imgConfiguration from "../../../../../resources/images/tutorial/configuration.png";
import imgDocuments from "../../../../../resources/images/tutorial/docs.png";
import { useToastContext } from "../../../../../context/ToastContext";
import { getHeaders } from "../../../../../helpers";
import { useLocalStorage } from "../../../../../hooks/useLocalStorage";

//Globals
import { useSelector } from "react-redux";


const selectImage = {
  introduction: imgIntroduction,
  connect: imgConnect,
  storage: imgStorage,
  model: imgModel,
  projects: imgProjects,
  configuration: imgConfiguration,
  docs: imgDocuments,
};

const Info = ({ currentIndex, changeIndex, next }) => {
  const [tutorial, setTutorial] = useLocalStorage("tutorial", null); // eslint-disable-line
  const addToast = useToastContext();
  const translateX = currentIndex * -100;
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
  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div className="w-[80%]">
      <div
        className="flex flex-row w-[100%] relative"
        style={{ overflowX: "hidden" }}
      >
        {INFOSTEPSN.map((item, index) => {
          return (
            <div
              key={index}
              className="scroll min-w-[100%] relative"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: "transform 0.3s ease-in-out",
                overflowY: "auto",
                height: "calc(100vh - 130px)",
              }}
            >
              <img
                src={selectImage[item.name]}
                alt="name"
                style={{ width: "100%" }}
              />
              {item.sections.map((sect, index) => (
                <div className="mt-4 mb-[50px]" key={index}>
                  <p className="text-[17px] font-medium text-color-primary" style={{ color: primaryColor }}>
                    {sect.title}
                  </p>
                  <p>{sect.description}</p>
                </div>
              ))}
            </div>
          );
        })}
        <div
          className="flex items-center bg-white absolute w-[97.5%] h-[40px]"
          style={{
            bottom: "0px",
          }}
        >
          <div className="flex w-[100%] justify-between">
            <button
              onClick={changeStatusTutorial}
              className="text-color-primary"
              style={{ color: primaryColor }}
            >
              Skip tutorial
            </button>
            <div className="flex items-center">
              {INFOSTEPSN.map((info, index) => (
                <button
                  key={`${info.name}-${index}`}
                  onClick={() => changeIndex(index)}
                  className="w-[15px] h-[15px] mr-[10px]"
                  style={{
                    borderRadius: "100px",
                    background: index === currentIndex ? primaryColor : "#B0B0B0",
                  }}
                ></button>
              ))}
              <button
                onClick={next}
                className="bg-color-primary rounded-full w-28 h-[30px] p-2 flex items-center justify-center text-white gap-1 capitalize"
                style={{ background: primaryColor }}
              >
                <p>Next</p>
                <RightArrow className="h-1.5 w-3 -rotate-90 mb-[-3px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
