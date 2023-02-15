import { useState, useEffect } from "react";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Sections
import ModalCreateProject from "../../../../components/Modals/ModalCreateProject";
import StepByStep from "../../sections/StepByStep";
import FormConnectByDrive from "../sections/FormConnectByDrive";

//Helpers
import { makeRequest } from "../../../../helpers/index";

//Actions
import { setIsLoading } from "../../../../features/Loader";
import { resetDataForm } from "../../../../features/connect/myConnectors";

const MyConnectionsDrive = () => {
  const dispatch = useDispatch();
  const registerSteps = useSelector(
    (state) => state.myConnectors.registerSteps
  );

  const [connectors, setConnectors] = useState([]);
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState("");
  const [projects, setProjects] = useState([]);
  const [showModalCreateProject, setShowModalCreateProject] = useState(false);

  useEffect(() => {
    getInitialData();
    dispatch(resetDataForm());
  }, []);

  const changeFileName = (event) => {
    setFileName(event.target.value);
  };

  const toggleLoading = (active = true, text = "") => {
    dispatch(setIsLoading({ isLoading: active, textLoading: text }));
  };

  const getInitialData = async () => {
    toggleLoading();
    await Promise.all([getProjects(), getConnectors()]);
    toggleLoading(false);
  };

  const getConnectors = async () => {
    const response = await makeRequest("connector/get/type/in", "POST", {
      connector_type: "Drive",
    });
    setConnectors(response.data);
    toggleLoading(false);
  };

  const getProjects = async () => {
    const response = await makeRequest("project/list", "GET");
    response.data.length > 0
      ? setProjects(response.data)
      : setShowModalCreateProject(true);
  };

  const getFile = async () => {
    toggleLoading();
    const response = await makeRequest("connector/drive/search", "POST", {
      connector_key: registerSteps.connectors.value,
      search_text: fileName,
    });
    if (response.data.status) {
      setFile(response.data.data);
    }
    toggleLoading(false);
  };

  return (
    <div className="w-full h-full" style={{ overflowY: "auto" }}>
      <ModalCreateProject showModalCreateProject={showModalCreateProject} />
      <p className="px-[20px] pt-[10px]">
        Follow the setup guide on the right to connect your data source to
        MyNiiu. If you need help accessing the source system, invite a teammate
        to complete this step.
      </p>
      <div className="flex flex-col p-[20px] w-full relative">
        <StepByStep
          one={registerSteps["connectors"].completed}
          two={fileName.length > 0}
          three={registerSteps["file"].completed}
          four={registerSteps["project"].completed}
          five={registerSteps["storage"].completed}
        />
        <FormConnectByDrive
          connectors={connectors}
          file={file}
          projects={projects}
          changeFileName={changeFileName}
          fileName={fileName}
          getFile={getFile}
        />
      </div>
    </div>
  );
};

export default MyConnectionsDrive;
