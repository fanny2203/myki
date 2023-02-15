import { useEffect, useState } from "react";
import { getHeaders } from "../../../helpers";
import { CollapseIcon, SearchIcon } from "../../../resources/icon";
import ButtonCollapse from "./ButtonCollapse";

//Globals
import { useSelector } from "react-redux";

export default function SideBarOptions ({
  sidebarStateModel,
  setSidebarStateModel,
  tablesOfDatabase,
  setColumnsOfTable,
  currentTable,
  setCurrentTableSelector
}) {
  const [currentTableSelect, setCurrentTableSelect] = useState(currentTable)

  const { primaryColor } = useSelector((state) => state.theme.theme);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL_API + 'project/tables/content', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ project_key: "5424181", collection_name: currentTableSelect })
    })
    .then((response) => response.json())
    .then(response => {
      setCurrentTableSelector(currentTableSelect)
      setColumnsOfTable([])      
      if (response.status === undefined) setColumnsOfTable(response)
    })
  }, [setColumnsOfTable, currentTableSelect, setCurrentTableSelector])

  return <div className="h-full w-full bg-white flex flex-col items-center justify-start">
    <div className={`flex ${sidebarStateModel ? 'justify-between' : 'justify-center' } items-center w-full p-4 mt-2 `}>
      {sidebarStateModel && <p>Tables</p>}
      <div className="flex gap-4">
        {sidebarStateModel && <div className={`rounded-md border border-[#FBFBFB] hover:bg-[${primaryColor}] hover:text-white py-2 px-2.5 text-black`}><SearchIcon /></div>}
        {/* {sidebarStateModel && <div className="rounded-md border border-[#FBFBFB] hover:bg-color-primary hover:text-white py-2 px-2.5 text-black"><CollapseIcon /></div>} */}
        <button onClick={() => setSidebarStateModel(!sidebarStateModel)} className={` ${sidebarStateModel ? '-rotate-90' : 'rotate-90'} rounded-md border border-[#FBFBFB] hover:bg-[${primaryColor}] hover:text-white py-2 px-2.5 text-black `}><CollapseIcon className={`w-6 h-6`} alt='Collapse' /></button>
      </div>
    </div>

    <div className="flex flex-col justify-start items-center h-full w-full p-4 mt-2 gap-1">
      {tablesOfDatabase.map((option, index) => <ButtonCollapse
        selected={(currentTableSelect === option.name)}
        setCurrentTableSelect={setCurrentTableSelect}
        sidebarStateModel={sidebarStateModel}
        setSidebarStateModel={setSidebarStateModel} 
        key={index}
        name={option.name}
      />)}
    </div>
  </div>
}
