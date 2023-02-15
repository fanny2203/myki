import { useState } from "react";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Icons
import {
  AlertErrorTrinagleIcon,
  AlertErrorCircleIcon,
  Options3Points,
} from "../../../../resources/icon";

//Components
import BtnTags from "../../../../components/BtnTags";
import Dropdown from "../../../../components/Dropdowns/DropdownStorage";

//Helpers
import { transformDate } from "../../../../helpers";

const TableProjects = ({ data = [], goToConnectors }) => {
  const [drop, setDrop] = useState("");

  const selectedDrop = (value, event) => {
    event.stopPropagation();
    setDrop(value);
  };

  return (
    <div
      className="scroll flex w-full "
      style={{
        height: "calc(100vh - 195px)",
        overflowY: "auto",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p>Projects</p>
              </TableCell>
              <TableCell align="left">
                <p>Collections</p>
              </TableCell>
              <TableCell align="left">
                <p>Create on</p>
              </TableCell>
              <TableCell align="left">
                <p>Warnings & Error</p>
              </TableCell>
              <TableCell align="left">
                <p>Tables</p>
              </TableCell>
              <TableCell align="left">
                <p>Action</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item.name + index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="cursor-pointer"
                onClick={() => goToConnectors(item)}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="left"> {item.collections}</TableCell>
                <TableCell align="left">{transformDate(item.date)}</TableCell>
                <TableCell align="right">
                  <div className="flex">
                    <div className="flex items-center mr-[5px] text-color-danger">
                      <AlertErrorTrinagleIcon />
                      <p className="ml-[5px] text-black">12</p>
                    </div>
                    <div className="flex items-center text-color-warning">
                      <AlertErrorCircleIcon />
                      <p className="ml-[5px] text-black">16</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">12</TableCell>
                <TableCell align="left">
                  <div className="flex">
                    <BtnTags tags={item.tags} />
                    <div
                      className="flex justify-center ml-[20px] w-[15px] relative"
                      onClick={(e) => selectedDrop(item.name, e)}
                      tabIndex={0}
                      onBlur={() => setDrop(false)}
                    >
                      <Options3Points />
                      {drop === item.name && (
                        <Dropdown
                          left="-130px"
                          top="0px"
                          details={false}
                          move={false}
                          duplicate={false}
                          download={false}
                        />
                      )}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableProjects;
