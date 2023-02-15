import React from "react";

const GridContainer = ({ children }) => {
  return (
    <div
      className="scroll flex w-full p-[20px]"
      style={{
        flexWrap: "wrap",
        gap: "10px",
        maxHeight: "calc(100vh - 155px)",
        overflowY: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
