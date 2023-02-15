// //Icons
import { CalendarIcon } from "../../../../resources/icon";

// //Externals
import { TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const TimeSelect = ({ error, handleChange, value }) => {
  return (
    <div className="flex items-center mt-[25px] ">
      <div className="flex mr-[10px] items-center mb-[-3px]">
        <CalendarIcon />
        <p className="ml-[5px] text-lg">Schedule</p>
      </div>

      <div className="">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label="Time"
            value={value || ""}
            error={error}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            ampm={false}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default TimeSelect;
