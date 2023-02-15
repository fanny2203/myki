import { useState, useEffect } from "react";

//Sections
import Empty from "../sections/Empty";
import StepByStep from "../../sections/StepByStep";
import FormMyConnectors from "../../sections/FormMyConnectors";

//Elements
import ModalCreateProject from "../../../../components/Modals/ModalCreateProject";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { setIsLoading } from "../../../../features/Loader";
import { resetDataForm } from "../../../../features/connect/myConnectors";

//Helpers
import { makeRequest } from "../../../../helpers/index";

const RegisterConnect = () => {
  const dispatch = useDispatch();
  const registerSteps = useSelector(
    (state) => state.myConnectors.registerSteps
  );
  const valueConnector = useSelector(
    (state) => state.myConnectors.registerSteps.connectors
  );
  const valueDb = useSelector((state) => state.myConnectors.registerSteps.db);

  const [connectors, setConnectors] = useState([]);
  const [db, setDb] = useState([]);
  const [collections, setCollections] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showModalCreateProject, setShowModalCreateProject] = useState(false);

  useEffect(() => {
    getInitialData();
    dispatch(resetDataForm());
  }, []);

  useEffect(() => {
    if (valueConnector.completed) {
      getDB();
    }
  }, [valueConnector]);

  useEffect(() => {
    if (valueDb.completed) {
      getCollections();
    }
  }, [valueDb]);

  const toggleLoading = (active = true, text = "") => {
    dispatch(setIsLoading({ isLoading: active, textLoading: text }));
  };

  const getInitialData = async () => {
    toggleLoading();
    await Promise.all([getProjects(), getConnectors()]);
    toggleLoading(false);
  };

  const getProjects = async () => {
    const response = await makeRequest("project/list", "GET");
    response.data.length > 0
      ? setProjects(response.data)
      : setShowModalCreateProject(true);
  };

  const getConnectors = async () => {
    const response = await makeRequest("connector/get/type/in", "POST", {
      connector_type: "MongoDB",
    });
    setConnectors(response.data);
    toggleLoading(false);
  };

  const getCollections = async () => {
    toggleLoading();
    const response = await makeRequest("connector/mongo/collections", "POST", {
      connector_key: valueConnector.value,
      db: valueDb.value,
    });
    setCollections(response.data);
    toggleLoading(false);
  };

  const getDB = async () => {
    toggleLoading();
    const response = await makeRequest("connector/mongo/databases", "POST", {
      connector_key: valueConnector.value,
    });
    setDb(response.data);
    toggleLoading(false);
  };

  const toggleModalCreateProject = (value) => {
    setShowModalCreateProject(value);
  };

  const addNewProject = (value) => {
    setProjects([...projects, value]);
  };

  return (
    <div className="w-full h-full" style={{ overflowY: "auto" }}>
      <ModalCreateProject
        showModalCreateProject={showModalCreateProject}
        toggleModalCreateProject={toggleModalCreateProject}
        addNewProject={addNewProject}
      />
      <p className="px-[20px] pt-[10px]">
        Follow the setup guide on the right to connect your data source to
        MyNiiu. If you need help accessing the source system, invite a teammate
        to complete this step.
      </p>
      {projects.length === 0 ? (
        <Empty toggleModalCreateProject={toggleModalCreateProject} />
      ) : (
        <div className="flex flex-col p-[20px] w-full relative">
          <StepByStep
            one={registerSteps["connectors"].completed}
            two={registerSteps["db"].completed}
            three={registerSteps["collection"].completed}
            four={registerSteps["project"].completed}
            five={registerSteps["storage"].completed}
          />
          <FormMyConnectors
            connectors={connectors}
            db={db}
            collections={collections}
            projects={projects}
          />
        </div>
      )}
    </div>
  );
};

export default RegisterConnect;
