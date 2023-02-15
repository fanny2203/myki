import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//components
import LayoutConnect from "../LayoutConnect";
import Info from "../Info";

//Sections
import NewConnector from "./sections/NewConnector";
import RegisterConnect from "./sections/RegisterConnect";
import Header from "../sections/Header";

//Helpers
import { makeRequest } from "../../../helpers/index";
import STransformData from "../../../helpers/transformDataNewConnectByMongo";

//Globals
import { useSelector, useDispatch } from "react-redux";

// Notifications Toast
import { useToastContext } from "../../../context/ToastContext";

//Actions
import {
  setInputsNewConnect,
  setBtnRegister,
  setIsCreate,
} from "../../../features/connect/connectByMongo";
import { setIsLoading } from "../../../features/Loader";

const ConnectByApi = () => {
  const dispatch = useDispatch();
  const addToast = useToastContext();
  const inputsNewConnect = useSelector(
    (state) => state.connectByMongo.inputsNewConnect
  );
  const registerSteps = useSelector(
    (state) => state.myConnectors.registerSteps
  );
  const showBtnRegister = useSelector(
    (state) => state.connectByMongo.showBtnRegister
  );
  const isCreate = useSelector((state) => state.connectByMongo.isCreate);

  const location = useLocation();

  useEffect(() => {
    getConnectors();
  }, []);

  const validateEmpty = (item) => {
    if (item.value === "") {
      return { ...item, error: true };
    }
    return { ...item, error: false };
  };

  const validateBtn = () => {
    if (!isCreate) {
      if (registerSteps["storage"].completed) return true;
      return false;
    }
    return true;
  };

  const validatePort = (item) => {
    const isValid = item.value.match(/^\d+$/);
    if (isValid) {
      if (parseInt(item.value) < 1000) {
        return {
          ...item,
          error: true,
          helperText:
            "Please take into account that the chosen port needs to be equal or greater than 1000",
        };
      }
      return { ...item, error: false };
    }
    return { ...item, error: true, helperText: "invalid port" };
  };

  const verifyFormNewConnect = () => {
    const dataValidated = inputsNewConnect.map((item) => {
      if (item.required) {
        const emptyData = validateEmpty(item);
        if (item.name === "port") {
          const newPort = validatePort(item);
          return newPort;
        }
        return emptyData;
      } else {
        return item;
      }
    });
    dispatch(setInputsNewConnect(dataValidated));
    let allOk = true;
    dataValidated.forEach((item) => {
      if (item.error) {
        allOk = false;
      }
    });
    return allOk;
  };

  const getConnectors = async () => {
    const response = await makeRequest("connector/get/type/in", "POST", {
      connector_type: "MongoDB",
    });
    response?.data?.length > 0
      ? dispatch(setBtnRegister(true))
      : dispatch(setBtnRegister(false));
  };

  const buttonHandlerNewConnect = () => {
    let isOkNewConnect = verifyFormNewConnect();
    if (isOkNewConnect) {
      const data = STransformData(inputsNewConnect, location?.state.isPrivate);
      dispatch(
        setIsLoading({ isLoading: true, textLoading: "Checking connection" })
      );
      makeRequest("connector/mongo/create", "POST", data)
        .then((response) => {
          addToast(response.data.message, response.data.status);
          dispatch(setBtnRegister(true));
          dispatch(setIsCreate(false));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() =>
          dispatch(setIsLoading({ isLoading: false, textLoading: "" }))
        );
    }
  };

  const showRegister = () => {
    dispatch(setIsCreate(false));
  };

  const showCreate = () => {
    dispatch(setIsCreate(true));
  };

  const registerConnector = () => {
    // const idProyect = registerSteps["project"].value.split("/")[1];
    // const data = {
    //   connector_key: registerSteps["connectors"].value,
    //   mongo_db: registerSteps["mongoDB"].value,
    //   mongo_coll: registerSteps["collection"].value,
    //   destination_coll: registerSteps["storage"].value,
    //   destination_db: idProyect,
    // };
    // dispatch(
    //   setIsLoading({ isLoading: true, textLoading: "Registering connector" })
    // );
    // makeRequest("connector/mongo/send/db", "POST", data)
    //   .then((response) => {
    //     addToast(response.data.message, response.data.status);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() =>
    //     dispatch(setIsLoading({ isLoading: false, textLoading: "" }))
    //   );
  };

  const handleAction = () => {
    if (isCreate) {
      buttonHandlerNewConnect();
    } else {
      if (registerSteps["storage"].completed) {
        registerConnector();
      }
    }
  };

  const addHeader = () => {
    return (
      <>
        <Header
          isCreate={isCreate}
          showBtnRegister={showBtnRegister}
          activeCreate={showCreate}
          activeRegister={showRegister}
        />
        {isCreate ? <NewConnector /> : <RegisterConnect />}
      </>
    );
  };

  return (
    <LayoutConnect
      buttonText={isCreate ? "Save Changes" : "Set schema"}
      buttonHandler={handleAction}
      details={addHeader()}
      info={<Info title="Connect by Mongo" />}
      active={validateBtn()}
    />
  );
};

export default ConnectByApi;
