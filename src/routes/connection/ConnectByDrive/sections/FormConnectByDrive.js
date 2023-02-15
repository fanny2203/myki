//Externals
import { TextField, MenuItem } from "@mui/material";

//Globals
import { useSelector, useDispatch } from "react-redux";

//CustomButton
import CustomButton from "../../../../components/CustomButton";

//Actions
import {
  setRegisterSteps,
  setStorage,
} from "../../../../features/connect/myConnectors";

const FormConnectByDrive = ({
  connectors = [],
  file = [],
  projects = [],
  changeFileName,
  fileName,
  getFile,
}) => {
  const dispatch = useDispatch();
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const registerSteps = useSelector(
    (state) => state.myConnectors.registerSteps
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setRegisterSteps({ name, value }));
  };

  const handleChangeStorage = (event) => {
    const value = event.target.value;
    if (value !== "") {
      dispatch(setStorage({ value, completed: true }));
    } else {
      dispatch(setStorage({ value, completed: false }));
    }
  };

  const handleGetFile = () => {
    if (fileName.length > 0) {
      getFile();
    }
  };

  return (
    <>
      <TextField
        id="standard-select"
        select
        label="Connectors"
        variant="standard"
        name="connectors"
        defaultValue=""
        required
        sx={{ marginBottom: "10px" }}
        error={registerSteps["connectors"].error}
        onChange={handleChange}
        helperText={
          registerSteps["connectors"].error &&
          registerSteps["connectors"].helperText
        }
      >
        {connectors.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>

      {registerSteps["connectors"].completed && (
        <div className="flex w-full items-end">
          <div className="w-full mr-[30px]">
            <TextField
              id="standard-select"
              label="File name"
              variant="standard"
              onChange={changeFileName}
              required
              sx={{ width: "100%" }}
            />
          </div>
          <button
            onClick={handleGetFile}
            className={`p-1 px-4 rounded-[100px] text-white ${
              fileName.length > 0 ? "bg-color-primary" : "bg-gray2"
            }`}
            style={{ background: fileName.length > 0 && primaryColor }}
          >
            Search
          </button>
        </div>
      )}

      {file.length > 0 && (
        <TextField
          id="standard-select"
          select
          label="File"
          variant="standard"
          name="file"
          defaultValue=""
          required
          sx={{ marginBottom: "10px" }}
          error={registerSteps["file"].error}
          onChange={handleChange}
          helperText={
            registerSteps["file"].error && registerSteps["file"].helperText
          }
        >
          {file.map((option) => (
            <MenuItem key={option.file_id} value={option.file_id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      )}

      {registerSteps["file"].completed && (
        <TextField
          id="standard-select"
          select
          label="Project"
          variant="standard"
          defaultValue=""
          required
          error={registerSteps["project"].error}
          sx={{ marginBottom: "10px" }}
          onChange={handleChange}
          name="project"
        >
          {projects.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      )}

      {registerSteps["project"].completed && (
        <TextField
          id="standard-select"
          label="Storage"
          variant="standard"
          onChange={handleChangeStorage}
          required
        />
      )}
    </>
  );
};

export default FormConnectByDrive;
