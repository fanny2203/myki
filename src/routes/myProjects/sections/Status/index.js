import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Externasl
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Icons
import { FixIcon } from "../../../../resources/icon";

//Helpers
import { makeRequest } from "../../../../helpers";

const Status = () => {
  const [statusList, setStatusList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    try {
      const result = await makeRequest("layout/synchistory", "POST", {
        layout_id: location.state.layout_id,
      });
      setStatusList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="scroll w-full"
      style={{ height: "calc(100vh - 160px)", overflowY: "auto" }}
    >
      <div className="w-full p-[20px]">
        <p className="border-b border-gray2 pb-[10px]">
          Your connector is ready to sync source data to your destination!
          Syncing may take time depending on how large your date set is. After
          the sync is complete you’ll be notified via e-mail and your 14 day
          trial will begin.
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className="font-bold">Status</p>
                </TableCell>
                <TableCell className="font-medium" align="right">
                  <p className="font-bold"> Date / Hour</p>
                </TableCell>
                <TableCell className="font-medium" align="right">
                  <p className="font-bold"> Description</p>
                </TableCell>
                <TableCell className="font-medium" align="right">
                  <p className="font-bold">Actions</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statusList.map((row, index) => (
                <TableRow
                  key={row.name + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.status}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">
                    <div className="flex w-full justify-end cursor-pointer">
                      {row.carbs && <FixIcon />}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Status;
