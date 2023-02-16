import { useEffect, useState } from "react";

import HeaderSetup from "./sections/HeaderSetup";

//Sections
import Categories from "./sections/Categories";
import TableGuides from "./sections/TableGuides";

//helpers
import { makeRequest } from "../../helpers";

function createData(name, actions) {
  return { name, actions };
}

const rows = [
  createData("Simetrical", 159),
  createData("Car", 2),
  createData("Projects", 262, 16.0, 24, 6.0),
  createData("Seat", 305, 3.7, 67, 4.3),
  createData("Distribuidor", 356, 16.0, 49, 3.9),
  createData("Sales", 356, 16.0, 49, 3.9),
  createData("MyNiuu test", 356, 16.0, 49, 3.9),
  createData("Simetrical", 159),
  createData("Car", 2),
  createData("Projects", 262, 16.0, 24, 6.0),
  createData("Seat", 305, 3.7, 67, 4.3),
  createData("Distribuidor", 356, 16.0, 49, 3.9),
  createData("Sales", 356, 16.0, 49, 3.9),
  createData("MyNiuu test", 356, 16.0, 49, 3.9),
];

const options = ["uno", "dos"];

const AllGuides = () => {
  useEffect(() => {
    getTypeConnections();
  }, []);

  const getTypeConnections = async () => {
    const result = await makeRequest("tutorial/type", "POST");
    console.log("este", result);
  };

  return (
    <div className="p-[20px] pt-[0px] w-[100%]">
      <HeaderSetup title="Setup Guide Tutorial">
        <button className="px-[20px] py-[3px] rounded-[50px] bg-color-primary text-white">
          Create a new
        </button>
      </HeaderSetup>
      <Categories options={options} />
      <TableGuides rows={rows} />
    </div>
  );
};

export default AllGuides;
