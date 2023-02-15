//Helpers
import { makeRequest } from "../../../helpers";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Externals
import { TextField, MenuItem } from "@mui/material";

//Actions
import { setIsLoading } from "../../../features/Loader";
import {
  setCollection,
  setRegisterSteps,
  setStorage,
} from "../../../features/connect/myConnectors";

const FormMyConnectors = ({
  connectors = [],
  db = [],
  collections = [],
  projects = [],
}) => {
  const dispatch = useDispatch();

  const registerSteps = useSelector(
    (state) => state.myConnectors.registerSteps
  );

  const toggleLoading = (active = true, text = "") => {
    dispatch(setIsLoading({ isLoading: active, textLoading: text }));
  };

  const veifyDataCollection = async (value, name) => {
    toggleLoading();
    const response = await makeRequest("connector/mongo/check/data", "POST", {
      connector_key: registerSteps["connectors"].value,
      mongo_db: registerSteps["db"].value,
      mongo_coll: value,
    });
    toggleLoading(false);
    if (response.data.status) {
      dispatch(setCollection({ error: false, msg: "", completed: true }));
    } else {
      dispatch(
        setCollection({
          error: true,
          msg: "No data available",
          complete: false,
        })
      );
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "collection") {
      veifyDataCollection(value, name);
    } else {
      dispatch(setRegisterSteps({ name, value }));
    }
  };

  const handleChangeStorage = (event) => {
    const value = event.target.value;
    if (value !== "") {
      dispatch(setStorage({ value, completed: true }));
    } else {
      dispatch(setStorage({ value, completed: false }));
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
        <TextField
          id="standard-select"
          select
          label="MongoDB"
          name="db"
          variant="standard"
          defaultValue=""
          error={registerSteps["db"].error}
          onChange={handleChange}
          required
          sx={{ marginBottom: "10px" }}
        >
          {db.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}

      {registerSteps["db"].completed && (
        <TextField
          id="standard-select"
          select
          label="Mongo collection"
          variant="standard"
          error={registerSteps["collection"].error}
          helperText={
            registerSteps["collection"].error &&
            registerSteps["collection"].helperText
          }
          defaultValue=""
          required
          onChange={handleChange}
          name="collection"
          sx={{ marginBottom: "10px" }}
        >
          {collections.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}

      {registerSteps["collection"].completed && (
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

export default FormMyConnectors;
