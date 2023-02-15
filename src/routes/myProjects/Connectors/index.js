import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Helements
import HeaderOne from "../elements/HeaderOne";
import GridContainer from "../elements/GridContainer";

import Dropdown from "../elements/Dropdown";

//Components
import BtnTags from "../../../components/BtnTags";

//Icons
import { RightArrow, Options3Points } from "../../../resources/icon";

//Helpers
import { getBaseRoute, makeRequest } from "../../../helpers";

//Globasl
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setConnectors } from "../../../features/projectsSection";

const Connectors = () => {
  const connectors = useSelector((state) => state.projectSection.connectors);
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const [drop, setDrop] = useState(null);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const connectorsFiltered = connectors.filter((connector) =>
    connector.data.includes(search)
  );

  useEffect(() => {
    getConnectors();
  }, []);

  const toggleDrop = (value) => {
    if (value === drop) {
      setDrop(null);
    } else {
      setDrop(value);
    }
  };

  const getConnectors = async () => {
    try {
      const response = await makeRequest("project/object/list", "POST", {
        project_id: location.state.projectSelected.id,
      });
      dispatch(setConnectors(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const goToDetails = (connector) => {
    const baseRoute = getBaseRoute();
    navigate(`${baseRoute}/projects/detailsconnectors`, {
      state: { ...location.state, layout_id: connector.layout_id },
    });
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div>
      <HeaderOne title="Connectors" handleSearch={handleSearch} />
      <div>
        <GridContainer>
          {connectorsFiltered.map((connector, index) => (
            <div
              key={index + connector.data}
              className="min-h-[280px] w-[330px] bg-gray p-[15px] rounded"
            >
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-gray2 mr-[5px]">ID:</p>
                  <p
                    className="w-[140px]"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {connector.data}
                  </p>
                </div>
                <div
                  className="flex items-center text-color-primary cursor-pointer"
                  onClick={() => goToDetails(connector)}
                  style={{ color: primaryColor }}
                >
                  <div
                    className="h-[20px] w-[20px] bg-color-primary rounded-[100px] mr-[10px]"
                    style={{ background: primaryColor }}
                  ></div>
                  <p
                    className="text-color-primary mr-[10px]"
                    style={{ color: primaryColor }}
                  >
                    Details
                  </p>
                  <RightArrow />
                  <div className="flex justify-center ml-[10px] text-black w-[20px]">
                    <Options3Points />
                  </div>
                </div>
              </div>
              <div className="flex justify-between py-[20px] border-b border-gray2">
                <div className="flex">
                  <p className="text-gray2 mr-[5px]">Create on:</p>
                  <p>01/12/2022</p>
                </div>
                <BtnTags />
              </div>
              <Dropdown title="Warnings" drop={drop} action={toggleDrop} />
              <Dropdown title="Errors" drop={drop} action={toggleDrop} />
            </div>
          ))}
        </GridContainer>
      </div>
    </div>
  );
};

export default Connectors;
