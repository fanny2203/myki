import { useEffect, useState } from "react";
import HeaderHelp from "./sections/HeaderHelp";

//helpers
import { makeRequest } from "../../helpers";
import SectionDoc from "./SectionDoc";

const Docs = () => {
  const [tutorials, setTutorials] = useState([]);
  const [sectionSeletec, setSectionSeletec] = useState("");

  useEffect(() => {
    getConnections();
  }, []);

  const getConnections = async () => {
    const result = await makeRequest("tutorial/docs", "GET");
    setTutorials(result.data);
  };

  const getAcordeon = (value) => {
    setSectionSeletec(value._id);
  };

  return (
    <div className="p-[20px]">
      <HeaderHelp title="Docs" />
      <div className="flex w-[100%]">
        <div className="flex-col w-[20%] pr-[10px]">
          {tutorials.map((tutorial, index) => {
            return (
              <SectionDoc
                sectionSeletec={sectionSeletec}
                tutorial={tutorial}
                key={tutorial.name + index}
                getAcordeon={getAcordeon}
              />
            );
          })}
        </div>
        <div className="w-[80%] h-[600px] bg-color-danger"></div>
      </div>
    </div>
  );
};

export default Docs;
