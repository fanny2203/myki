import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Sections
import SideStore from "../sections/SideStore";
import HeaderStorage from "../sections/HeaderStorage";
import GridProjects from "../sections/GridProjects";
import TableProjects from "../sections/TableProjects";

//Modals
import ModalUploadFile from "../../../components/Modals/ModalUploadFile";

//Helpers
import { makeRequest } from "../../../helpers";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setIsLoading } from "../../../features/Loader";
import { setCollections } from "../../../features/collectionsStorage";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode, setMode] = useState("dir");
  const [search, setSearch] = useState("");

  const { modalUploadFile } = useSelector((state) => state.modalsStorage);
  const upload = useSelector((state) => state.handleFile.upload);
  const collectionsStorage = useSelector(
    (state) => state.collectionsStorage.collections
  );

  const spaceNameLocal = localStorage.getItem("spacename");
  const spaceName = spaceNameLocal.slice(1, -1);

  const location = useLocation();

  console.log("details");

  useEffect(() => {
    getInfoProject(location?.state.path.id);
    if (!upload) {
      getInfoProject(location?.state.path.id);
    }
  }, [upload]);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const updateFilter = (event) => {
    setSearch(event.target.value);
  };

  const projectsFiltered = collectionsStorage.filter((project) =>
    project.name.includes(search)
  );

  const getInfoProject = async (id) => {
    console.log("details make request");
    const numerId = id.split("/");
    toggleLoader(true);
    const response = await makeRequest("project/storage", "POST", {
      project_key: numerId[1],
    });
    const collectionTransformed = response.data.collections.map(
      (collection) => ({ ...collection, type: "Folder" })
    );
    dispatch(setCollections(collectionTransformed));
    toggleLoader(false);
  };

  const changeMode = (value) => {
    setMode(value);
  };

  const goTo = (value) => {
    navigate(`/${spaceName}/dashboard/storage/infocollection`, {
      state: { ...location?.state, collection: value },
    });
  };

  return (
    <div className="flex w-full h-full">
      <ModalUploadFile showModal={modalUploadFile} data={collectionsStorage} />
      <SideStore />
      <div className="flex flex-col w-full">
        <HeaderStorage
          mode={mode}
          changeMode={changeMode}
          updateFilter={updateFilter}
        />
        {
          {
            dir: <GridProjects projects={projectsFiltered} action={goTo} />,
            list: <TableProjects projects={projectsFiltered} action={goTo} />,
          }[mode]
        }
      </div>
    </div>
  );
};

export default ProjectDetails;
