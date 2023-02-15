import { useState } from "react";
import { useNavigate } from "react-router-dom";

//helpers
import { makeRequest } from "../../../../helpers";

//Hooks
import useForm from "../../../../hooks/useForm";

//Icons
import { GoogleIcon } from "../../../../resources/icon";

// Notifications Toast
import { useToastContext } from "../../../../context/ToastContext";

//Externals
import { TextField } from "@mui/material";

//Globals
import { useSelector } from "react-redux";

const NewConnectDrive = () => {
  const addToast = useToastContext();
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const { handleChange, formData } = useForm();

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const drive = () => {
    if (formData?.name?.length > 0) {
      setError(false);
      const data = {
        connector_name: `Drive_${formData.name}`,
        google_api: "Drive",
        direction: "in",
        accessibility: "private",
      };
      saveLocal(data);
      makeRequest("connector/google/create", "POST", data)
        .then((response) => {
          if (response.data.status) {
            window.location?.replace(response.data.auth_url);
          } else {
            addToast(response.data.message, response.data.status);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
    }
  };

  const saveLocal = (data) => {
    try {
      window.localStorage.setItem(
        "dataCreateConnectorDrive",
        JSON.stringify(data)
      );
    } catch (error) {
      console.error(error);
    }
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
      <TextField
        id="name-input"
        name="name"
        label="Name"
        variant="standard"
        onChange={handleChange}
        error={error}
        helperText={error && "Field required"}
        required
        sx={{
          marginTop: "25px",
        }}
      />

      <div className="mt-[15px]">
        <button
          style={{ color: primaryColor, borderColor: primaryColor }}
          className="py-2 px-4 flex items-center justify-center gap-2 bg-neutral-100 border-2 border-color-primary rounded-full my-2 text-color-primary"
          onClick={() => drive()}
        >
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default NewConnectDrive;
