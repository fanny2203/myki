//Exterbals
import { TextField } from "@mui/material";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { setInputsNewConnect } from "../../../../features/connect/connectByMongo";

const NewConnector = () => {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.connectByMongo.inputsNewConnect);

  const handleChange = (target) => {
    const { name, value } = target;
    const newData = inputs.map((item) => {
      if (item.name === name) {
        return { ...item, value };
      }
      return item;
    });
    dispatch(setInputsNewConnect(newData));
  };

  return (
    <div
      className="flex flex-col py-[1rem] px-[2rem]"
      style={{ overflowY: "auto" }}
    >
      <p>
        Follow the setup guide on the right to connect your data source to
        MyNiiu. If you need help accessing the source system, invite a teammate
        to complete this step.
      </p>
      {inputs.map((item) => (
        <TextField
          key={item.name}
          id={item.name}
          name={item.name}
          error={item.error}
          label={item.label}
          onChange={(e) => handleChange(e.target)}
          variant="standard"
          placeholder={item.label}
          required={item.required}
          sx={{
            marginBottom: item.error ? "0px" : "15px",
          }}
          helperText={item.error && item.helperText}
        />
      ))}
    </div>
  );
};

export default NewConnector;
