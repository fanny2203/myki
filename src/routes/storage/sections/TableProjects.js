//Externals
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Sections
import RowProject from "./RowProject";

const TableProjects = ({ projects, getInfoProject, action = () => {} }) => {
  return (
    <div
      className="scroll flex w-full p-[20px]"
      style={{
        height: "calc(100vh - 155px)",
        overflowY: "auto",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="font-bold">File</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-bold">Size</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-bold">Type</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-bold">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <RowProject
                data={project}
                key={project.name}
                getInfoProject={getInfoProject}
                action={action}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableProjects;
