import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Sections
import SideStore from "../sections/SideStore";
import HeaderStorage from "../sections/HeaderStorage";
import GridProjects from "../sections/GridProjects";
import TableProjects from "../sections/TableProjects";

//Components
import ModalCreateProject from "../../../components/Modals/ModalCreateProject";

//Helpers
import { makeRequest } from "../../../helpers";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setIsLoading } from "../../../features/Loader";
import { setProjects } from "../../../features/projectsStorage";

const MainScrenn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode, setMode] = useState("dir");
  const [search, setSearch] = useState("");
  const [showModalCreateProject, setShowModalCreateProject] = useState(false);
  const projects = useSelector((state) => state.projectsStorage.projects);

  useEffect(() => {
    getProjects();
  }, []);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const getProjects = async () => {
    toggleLoader(true);
    const response = await makeRequest("project/list", "GET");
    response.data.length > 0
      ? dispatch(setProjects(response.data))
      : setShowModalCreateProject(true);
    toggleLoader(false);
  };

  const updateFilter = (event) => {
    setSearch(event.target.value);
  };

  const projectsFiltered = projects.filter((project) =>
    project.name.includes(search)
  );

  const changeMode = (value) => {
    setMode(value);
  };

  const addNewProject = (value) => {
    dispatch(setProjects(value));
  };

  const goToDetails = (data) => {
    navigate("details", { state: { path: data } });
  };

  const closeModal = () => {
    setShowModalCreateProject(false);
  };

  return (
    <div className="flex w-full h-full">
      <ModalCreateProject
        showModalCreateProject={showModalCreateProject}
        closeModal={closeModal}
        addNewProject={addNewProject}
      />
      <SideStore />
      <div className="flex flex-col w-full">
        <HeaderStorage
          mode={mode}
          changeMode={changeMode}
          updateFilter={updateFilter}
        />
        {
          {
            dir: (
              <GridProjects projects={projectsFiltered} action={goToDetails} />
            ),
            list: (
              <TableProjects projects={projectsFiltered} action={goToDetails} />
            ),
          }[mode]
        }
      </div>
    </div>
  );
};

export default MainScrenn;
