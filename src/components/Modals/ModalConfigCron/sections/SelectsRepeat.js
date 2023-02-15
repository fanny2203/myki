//Icons
import { RepeatIcon, RepeatIcon12 } from "../../../../resources/icon";

//Externals
import { TextField, MenuItem } from "@mui/material";

const months = [
  { label: "All months", value: "*" },
  { label: "January", value: 0 },
  { label: "February", value: 1 },
  { label: "March", value: 2 },
  { label: "April", value: 3 },
  { label: "May", value: 4 },
  { label: "June", value: 5 },
  { label: "July", value: 6 },
  { label: "August", value: 7 },
  { label: "September", value: 8 },
  { label: "October", value: 9 },
  { label: "November", value: 10 },
  { label: "December", value: 11 },
];

const SelectsRepeat = ({ handleChange }) => {
  return (
    <>
      <div className="flex mt-[20px] w-full">
        <div className="flex items-center">
          <RepeatIcon />
          <p className="text-lg ml-[5px]">Repeat</p>
        </div>
        <TextField
          id="standard-select-currency"
          select
          defaultValue="*"
          variant="standard"
          sx={{ width: "100%", marginLeft: "10px" }}
          onChange={handleChange}
        >
          {months.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      {/* <div className="flex mt-[20px] w-full">
        <div className="flex items-center">
          <RepeatIcon12 />
          <p className="text-lg ml-[5px]">Repeat</p>
        </div>
        <TextField
          id="standard-select-currency"
          select
          defaultValue="EUR"
          variant="standard"
          sx={{ width: "100%", marginLeft: "10px" }}
        >
          {priods.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div> */}
    </>
  );
};

export default SelectsRepeat;
