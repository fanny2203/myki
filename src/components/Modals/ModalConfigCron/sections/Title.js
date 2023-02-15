//Icons
import { TileIcon } from "../../../../resources/icon";

//Externals
import { TextField } from "@mui/material";

const Title = ({ handleChange }) => {
  return (
    <div className="flex items-end">
      <div className="flex mr-[10px] items-center mb-[-3px]">
        <TileIcon />
        <p className="ml-[5px] text-lg">Title</p>
      </div>

      <TextField
        name="title"
        className="w-full"
        id="standard-basic"
        variant="standard"
        label="Title"
        //error={warningEmail ? true : false}
        //helperText={warningEmail}
        onChange={handleChange}
        sx={{
          height: "40px",
          marginLeft: "5px",
        }}
      />
    </div>
  );
};

export default Title;
