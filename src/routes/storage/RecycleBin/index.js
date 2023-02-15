import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Sections
import SideStore from "../sections/SideStore";
import HeaderStorage from "../sections/HeaderStorage";
import GridProjects from "../sections/GridProjects";
import TableProjects from "../sections/TableProjects";

//Helpers
import { makeRequest } from "../../../helpers";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setIsLoading } from "../../../features/Loader";
import { setBins } from "../../../features/bins";

const ProjectDetails = () => {
  const bins = useSelector((state) => state.bins.bins);

  const dispatch = useDispatch();
  const [mode, setMode] = useState("dir");
  const [search, setSearch] = useState("");

  const location = useLocation();

  useEffect(() => {
    getBins();
  }, []);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const updateFilter = (event) => {
    setSearch(event.target.value);
  };

  const projectsFiltered = bins.filter((bin) => bin.name.includes(search));

  const getBins = () => {
    toggleLoader(true);
    makeRequest("bin/list", "GET")
      .then((response) => {
        dispatch(setBins(response.data));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        toggleLoader(false);
      });
  };

  const changeMode = (value) => {
    setMode(value);
  };

  return (
    <div className="flex w-full h-full">
      <SideStore />
      <div className="flex flex-col w-full">
        <HeaderStorage
          mode={mode}
          changeMode={changeMode}
          updateFilter={updateFilter}
        />
        {
          {
            dir: <GridProjects projects={projectsFiltered} />,
            list: <TableProjects projects={projectsFiltered} />,
          }[mode]
        }
      </div>
    </div>
  );
};

export default ProjectDetails;
