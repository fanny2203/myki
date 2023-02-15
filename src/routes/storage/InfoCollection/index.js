import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Helpers
import { makeRequest } from "../../../helpers";

//Components
import TableModel from "../../model/components/TableOfModel";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setIsLoading } from "../../../features/Loader";

//Icons
import { ModelCleasing } from "../../../resources/icon";

const InfoCollection = () => {
  const [collections, setCollections] = useState([]);
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spaceNameLocal = localStorage.getItem("spacename");
  const spaceName = spaceNameLocal.slice(1, -1);

  useEffect(() => {
    getInfoCollection();
  }, []);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  console.log(location);

  const getInfoCollection = () => {
    const idProject = location?.state.path.id.split("/")[1];
    const nameCollections = location?.state.collection.name;
    toggleLoader(true);
    makeRequest("project/tables/content", "POST", {
      project_key: idProject,
      collection_name: nameCollections,
    })
      .then((response) => {
        setCollections(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => toggleLoader(false));
  };

  return (
    <div className="flex flex-col w-full h-full p-[20px]">
      <div className="flex justify-between w-full h-[70px]">
        <p className="text-xl">{`Root / ${
          location?.state?.path?.name || ""
        } / ${location?.state?.collection.name}`}</p>
        <button
          className="flex items-center h-[35px] px-4 py-1 bg-color-primary rounded-[50px] text-white"
          style={{ background: primaryColor }}
          onClick={() =>
            navigate(`/${spaceName}/dashboard/model/transform`, {
              state: { ...location?.state },
            })
          }
        >
          <p className="mr-[10px]">Start model & cleansing</p>
          <ModelCleasing />
        </button>
      </div>
      <div className="w-full h-[400px]">
        <TableModel
          table={collections}
          config={false}
          format={false}
          check={false}
        />
      </div>
    </div>
  );
};

export default InfoCollection;
