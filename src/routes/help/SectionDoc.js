//icons
import { useState } from "react";
import { RightArrow } from "../../resources/icon";

const SectionDoc = ({ tutorial, sectionSeletec, getAcordeon }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="h-[5px] w-[5px] rounded-[100px] bg-black mt-[-4px]"></div>
        <p className="w-[140px] mb-[10px] ">{tutorial.name}</p>
        <div
          className="mt-[-5px]"
          style={{
            transform: "rotate(90deg)",
          }}
          onClick={() => getAcordeon(tutorial)}
        >
          <RightArrow />
        </div>
      </div>
      {sectionSeletec == tutorial._id && (
        <div className="acordeon mt-[-10px] ">
          <div className="bloque ml-[15px] ">
            {tutorial.tutorials.map((tutorial) => {
              return <p>{tutorial}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionDoc;
