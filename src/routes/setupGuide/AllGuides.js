import { useEffect, useState } from "react";

import HeaderSetup from "./sections/HeaderSetup";

//Sections
import Categories from "./sections/Categories";
import TableGuides from "./sections/TableGuides";

//helpers
import { makeRequest } from "../../helpers";

//Globals
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../features/Loader";

const AllGuides = () => {
  const [typeConnections, setTypeConnections] = useState([]);
  const [list, setList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getTypeConnections();
  }, []);

  const getTypeConnections = async () => {
    dispatch(setIsLoading({ isLoading: true }));
    const result = await makeRequest("tutorial/type", "POST");
    setTypeConnections(result.data);
    dispatch(setIsLoading({ isLoading: false }));
  };

  const getList = async (type) => {
    dispatch(setIsLoading({ isLoading: true }));
    const result = await makeRequest("tutorial/list", "POST", {
      connector_type: type,
    });
    setList(result.data);
    dispatch(setIsLoading({ setIsLoading: false }));
  };

  return (
    <div className="p-[20px] pt-[0px] w-[100%]">
      <HeaderSetup title="Setup Guide Tutorial">
        <button className="px-[20px] py-[3px] rounded-[50px] bg-color-primary text-white">
          Create a new
        </button>
      </HeaderSetup>
      <Categories options={typeConnections} getList={getList} />
      <TableGuides rows={list} />
    </div>
  );
};

export default AllGuides;
