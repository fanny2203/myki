import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteIcon, EyeIcon, PencilIcon } from "../../../resources/icon";

const TableGuides = ({ rows }) => {
  return (
    <div
      className="py-[20px] scroll"
      style={{
        height: "calc(100vh - 260px)",
        overflowY: "auto",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="font-bold">Name</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-bold">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={`${row.name} ${index}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <div className="flex justify-end ">
                    <div>
                      <EyeIcon />
                    </div>
                    <div className="ml-[10px] mr-[10px]">
                      <PencilIcon />
                    </div>
                    <div>
                      <DeleteIcon />
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

export default TableGuides;
