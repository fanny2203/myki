//Icons
import { CheckIcon } from "../../../../resources/icon";

//Externals
import { TextField, MenuItem } from "@mui/material";

//Globals
import { useSelector } from "react-redux";

//Helpers
import { generateDays } from "../../../../helpers";

const RepeatOnDays = ({ handleChange }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const allDays = generateDays();

  return (
    <div className="flex mt-[20px]">
      <div className="flex items-center">
        <div
          className="flex items-center justify-center text-white mr-[5px] w-[30px] h-[30px] rounded-[100px]"
          style={{ background: primaryColor }}
        >
          <CheckIcon />
        </div>
        <p>On Days</p>
      </div>
      <TextField
        id="standard-select-currency"
        select
        defaultValue="*"
        variant="standard"
        sx={{ width: "150px", marginLeft: "10px" }}
        onChange={handleChange}
      >
        {allDays.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default RepeatOnDays;
