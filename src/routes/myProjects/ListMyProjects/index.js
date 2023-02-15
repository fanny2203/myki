import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

//Sections
import TableProjects from "../sections/TableProjects";
import TableErrors from "../sections/TableErrors";

//Helpers
import { makeRequest } from "../../../helpers";

//Elements
import DirProject from "../elements/DirProject";
import GridContainer from "../elements/GridContainer";
import HeaderOne from "../elements/HeaderOne";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { setProjects } from "../../../features/projectsSection";
import { setIsLoading } from "../../../features/Loader";
import {
  setModalEdit,
  setModalDelete,
} from "../../../features/modal/modalsStorage";

const ListMyprojects = () => {
  const projects = useSelector((state) => state.projectSection.projects);

  const [mode, setMode] = useState("dir");
  const [search, setSearch] = useState("");
  const [porjectSelected, setPorjectSelected] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const changeMode = (value) => {
    setMode(value);
  };

  useEffect(() => {
    toggleLoader(true);
    makeRequest("project/view", "GET")
      .then((response) => {
        dispatch(setProjects(response.data));
      })
      .finally(() => toggleLoader(false));
  }, []);

  const projectsFiltered = projects.filter((project) =>
    project.name.includes(search)
  );

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const goToConnectors = (data) => {
    navigate(`connectors`, { state: { projectSelected: data } });
  };

  const handleOptions = (value, data) => {
    value === "edit" && dispatch(setModalEdit({ active: true, data }));
    value === "delete" && dispatch(setModalDelete({ active: true, data }));
  };

  const showModalAddTag = (value) => {
    setPorjectSelected(value);
  };

  const closeModalAddTag = () => {
    setPorjectSelected(null);
  };

  return (
    <div>
      <HeaderOne
        changeMode={changeMode}
        mode={mode}
        handleSearch={handleSearch}
      />
      <div className="p-[20px]">
        {
          {
            dir: (
              <GridContainer>
                {projectsFiltered.map((project, index) => (
                  <DirProject
                    key={index + project.name}
                    data={project}
                    goToConnectors={goToConnectors}
                    handleOptions={handleOptions}
                    showModalAddTag={showModalAddTag}
                    closeModalAddTag={closeModalAddTag}
                    porjectSelected={porjectSelected}
                  />
                ))}
              </GridContainer>
            ),
            list: (
              <TableProjects
                data={projectsFiltered}
                goToConnectors={goToConnectors}
              />
            ),
            error: <TableErrors />,
          }[mode]
        }
      </div>
    </div>
  );
};

export default ListMyprojects;
