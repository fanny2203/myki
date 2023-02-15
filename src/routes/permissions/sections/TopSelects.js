import { TextField } from "@mui/material";

//Icons
import { NameRoleIcon } from "../../../resources/icon";

const TopSelects = ({ handleChange }) => {
  return (
    <div className=" flex justify-between h-[60px] w-[100%]">
      <div className="flex items-center mb-[10px]">
        <div className="mb-[-15px]">
          <NameRoleIcon />
        </div>
        <TextField
          id="input-with-sx"
          label="Role name"
          variant="standard"
          name="name"
          sx={{ width: "600px", marginLeft: "10px" }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TopSelects;
