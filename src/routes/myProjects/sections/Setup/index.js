import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Components
import ModalConfigCron from "../../../../components/Modals/ModalConfigCron";
import ConfirmDelete from "../../../../components/Modals/ConfirmDelete";

//Sections
import Btns from "./Btns";
import SourceDestiny from "./SourceDestiny";
import Sync from "./Sync";

// Notifications Toast
import { useToastContext } from "../../../../context/ToastContext";

//Globals
import { useDispatch } from "react-redux";

//Actions
import { setIsLoading } from "../../../../features/Loader";

//Helpers
import { makeRequest, getKeysAndValuesObject } from "../../../../helpers";

const Setup = () => {
  const [setup, setSetup] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const addToast = useToastContext();

  useEffect(() => {
    getLogs();
  }, []);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const getLogs = async () => {
    toggleLoader(true);
    try {
      const result = await makeRequest("layout/get", "POST", {
        layout_id: location.state.layout_id,
      });
      const inData = getKeysAndValuesObject(result.data.IN.description);
      const outData = getKeysAndValuesObject(result.data.OUT.description);
      setSetup({
        in: inData,
        out: outData,
        crons: result.data.cron_string,
        idIN: result.data.IN.layout_id,
        idOUT: result.data.OUT.layout_id,
      });
    } catch (error) {
      console.log(error);
    }
    toggleLoader(false);
  };

  const initTestConnection = async () => {
    toggleLoader(true);
    try {
      const result = await makeRequest("layout/testconnection", "POST", {
        layout_id: location.state.layout_id,
      });
      if (result.data.status) {
      } else {
        addToast(result.data.message, false);
      }
    } catch (error) {
      console.log(error);
    }
    toggleLoader(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addSync = (value) => {
    console.log({
      ...setup,
      crons: [...setup.crons, { ...value, frecuency: value.frequency }],
    });
    setSetup({
      ...setup,
      crons: [...setup.crons, { ...value, frecuency: value.frequency }],
    });
  };

  return (
    <div className="w-full">
      {/* <ConfirmDelete showModal={showConfirmDelete} /> */}
      <ModalConfigCron
        showModal={showModal}
        closeModal={closeModal}
        data={{ idIN: setup.idIN, idOUT: setup.idOUT }}
        addSync={addSync}
      />
      <div
        className="w-full p-[20px]"
        style={{ height: "calc(100vh - 150px)" }}
      >
        <p className="border-b border-gray2 pb-[10px]">
          Your connector is ready to sync source data to your destination!
          Syncing may take time depending on how large your date set is. After
          the sync is complete you’ll be notified via e-mail and your 14 day
          trial will begin.
        </p>
        <Btns initTestConnection={initTestConnection} />
        <SourceDestiny setup={setup} />
        <Sync showModal={() => setShowModal(true)} data={setup.crons} />
      </div>
    </div>
  );
};

export default Setup;
