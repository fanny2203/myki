import React, { useState, useContext } from "react";
import { UserMachineContext } from "./userStateMachine.js";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import searchIcon from "../../resources/icon/dashboard/searchIcon.svg";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Box } from "@mui/system";
import PropTypes from 'prop-types'
import seeLogo from '../../resources/icon/dashboard/seeLogo.svg'
import editLogo from '../../resources/icon/dashboard/editLogo.svg'
import deleteLogo from '../../resources/icon/dashboard/deleteLogo.svg'


const createData = (name, lastName, email, rol) => {
  return {
    name,
    lastName,
    email,
    rol,
  };
};
const fakeData = [
  createData(
    "Justino",
    "Cristian Nadia",
    "gremizovavgus1985ms@riniiya.com",
    "User"
  ),
  createData(
    "Guillermo",
    "Estanislao Cecilio",
    "gremizovavgus1985ms@lunas.today",
    "User"
  ),
  createData("Atilio", "Manuela Fernando", "fernando@dominio.com", "Admin"),
  createData("Gema", "Itziar Rejón", "gremizovavgus1985ms@btcmod.com", "User"),
  createData("Laura", "Nicolas Cipriano", "email@gmail.com", "Admin"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headers = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "lastName",
    label: "Last name",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "rol",
    label: "Rol",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted desceding" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};



const UsersTable = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const {machine} = useContext(UserMachineContext)
  const [state, send] = machine // eslint-disable-line
  const [tableData, setTableData] = useState(fakeData)
  const [query, setQuery] = useState('')

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const searchOnData = (value) => {
    setQuery(value)
    if (value === '') {
      setTableData(fakeData)
    }
    else {
      let lowerCase = value.toLowerCase()
      let newData = fakeData.filter(datum => {
        return datum['name'].toLowerCase().includes(lowerCase)
      })
      setTableData(newData)
    }
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - fakeData.length) : 0;

  const actionsButtons = (
    <div className="flex w-[90px] justify-between">
        <button onClick={() => send('view')}><img src={seeLogo} alt="See in detail a user"/></button>
        <button onClick={() => send('edit')}><img src={editLogo} alt="Edit an user"/></button>
        <button><img src={deleteLogo} alt="Delete an user"/></button>
    </div>
  )

    return (
        <div style={{marginLeft: '20px', marginRight: '20px'}}>
            <Input
                id="userSearchInput"
                startAdornment = {
                    <InputAdornment position="start">
                        <img src={searchIcon} alt={'Search logo'}></img>
                    </InputAdornment>
                }
                fullWidth = {true}
                placeholder = {'Justino Cristian Nadia'}
                value={query}
                onChange={e => searchOnData(e.target.value)}
            />
            <Box sx={{width: '100%', marginTop: '20px'}}> 
                <Paper sx={{width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <EnhancedTableHead
                                onRequestSort={handleRequestSort}
                                order={order}
                                orderBy={orderBy}
                            />
                            <TableBody>
                                {stableSort(tableData, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((datum, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                key={datum.name}
                                            >
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {datum.name}
                                                </TableCell>
                                                <TableCell>{datum.lastName}</TableCell>
                                                <TableCell>{datum.email}</TableCell>
                                                <TableCell>{datum.rol}</TableCell>
                                                <TableCell>{actionsButtons}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 53 * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[15,20,25]}
                        component="div"
                        count={fakeData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </div>
    )
}

export default UsersTable
