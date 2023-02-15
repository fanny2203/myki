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
import TextField from "@mui/material/TextField";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { setIsLoading } from "../../../../features/Loader";

//Icons
import { FixIcon } from "../../../../resources/icon";

//Helpers
import { makeRequest } from "../../../../helpers";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Log = () => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const [logs, setLogs] = useState([]);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    getLogs();
  }, []);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const getLogs = async () => {
    toggleLoader(true);
    try {
      const result = await makeRequest("alerts/layout", "POST", {
        layout_id: location.state.layout_id,
      });
      setLogs(result.data);
    } catch (error) {
      console.log(error);
    }
    toggleLoader(false);
  };

  return (
    <div
      className="scroll w-full"
      style={{ height: "calc(100vh - 190px)", overflowY: "auto" }}
    >
      <div className="w-full p-[20px]">
        <p className="border-b border-gray2 pb-[10px]">
          Your connector is ready to sync source data to your destination!
          Syncing may take time depending on how large your date set is. After
          the sync is complete you’ll be notified via e-mail and your 14 day
          trial will begin.
        </p>
        <div className="flex justify-between items-baseline mt-[20px] mb-[20px]">
          <p className="text-lg">Logs</p>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            sx={{
              width: "200px",
            }}
          />

          <TextField
            id="standard"
            select
            label="Filter by all logs levels"
            defaultValue=""
            variant="standard"
            sx={{
              width: "200px",
            }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <TextField
            id="standard"
            select
            label="1 Hour"
            defaultValue=""
            variant="standard"
            sx={{
              width: "200px",
            }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <div
            style={{ color: primaryColor, borderColor: primaryColor }}
            className="flex justify-center items-center border border-color-primary h-[30px] px-3 rounded-[50px] text-color-primary"
          >
            Apply
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <p className="font-bold">#</p>
                </TableCell>
                <TableCell>
                  <p className="font-bold">Event</p>
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
              {logs.map((log, index) => (
                <TableRow
                  key={log.name + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{index}</TableCell>
                  <TableCell component="th" scope="log">
                    {log.name}
                  </TableCell>
                  <TableCell align="right">{log.data.time}</TableCell>
                  <TableCell align="right">{log.description}</TableCell>
                  <TableCell align="right">
                    <div className="flex w-full justify-end cursor-pointer">
                      {<FixIcon />}
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

export default Log;
