import { useState, useEffect } from 'react'
import SideBarModalLeft from '../../components/SideBarModalLeft'
import { HistoryIcon, RightArrow } from '../../resources/icon'
import SideBarOptions from './components/SideBarOptions'
import { getHeaders } from '../../helpers'
import TableOfModel from './components/TableOfModel'
import HistoryChanges from './components/HistoryChanges'
import Workflow from './screen/WorkFlow'

//Globals
import { useSelector } from "react-redux";

export default function LayoutModel ({ children, currentTable = null }) {
  const [sidebarStateModel, setSidebarStateModel] = useState(true) 
  const [sidebarModelLeft, setSidebarModelLeft] = useState(false)
  const [currentTableSelector, setCurrentTableSelector] = useState(currentTable)
  const [workFlow, openWorkFlow] = useState(false)
  const [tablesOfDatabase, setTablesOfDatabase] = useState([])
  const [columnsOfTable, setColumnsOfTable] = useState([])

  const { primaryColor } = useSelector((state) => state.theme.theme);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL_API + 'project/storage', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ project_key: "5424181" })
    })
    .then((response) => response.json())
    .then(response => setTablesOfDatabase(response.collections))
  },[setTablesOfDatabase])

  return <div className="w-full h-full p-0 bg-white m-0">
    <div className={`grid ${sidebarStateModel ? 'grid-cols-6 ' : 'grid-cols-12'}  bg-white w-full h-full m-0 bottom-0`}>
      
      {/* Sidebar of section  */}
      {sidebarStateModel !== null && <SideBarOptions
        setCurrentTableSelector={setCurrentTableSelector}
        currentTable={currentTable}
        setColumnsOfTable={setColumnsOfTable}
        tablesOfDatabase={tablesOfDatabase}
        sidebarStateModel={sidebarStateModel}
        setSidebarStateModel={setSidebarStateModel} 
      />}
      <div className={`${sidebarStateModel === true && 'col-span-5'} ${sidebarStateModel === false && 'col-span-11'} ${sidebarStateModel === null && 'col-span-12'} w-full h-5/6 p-0`}>
        <div className='w-full flex justify-between items-center h-20 bg-[#F8F8F8] top-0 px-4'>
          <div className='w-auto flex items-end justify-center gap-1'>
            <p className='text-2xl font-eigrantch-mono uppercase'>ODBC JAC API 001 </p>
            {currentTableSelector && <p className='text-md font-eigrantch-mono'> {'/' + currentTableSelector}</p>}
          </div>
          <div className='flex justify-between items-center gap-4'>
            <button onClick={() => setSidebarModelLeft(true)}>
              <HistoryIcon />
            </button>
            <button onClick={() => openWorkFlow(!workFlow)} className='border border-color-primary rounded-full px-4 py-1.5 text-md flex gap-2 items-center text-color-primary' style={{ color: primaryColor, borderColor: primaryColor }}>
              {workFlow ? 'Close' : 'Open'} Workflow <RightArrow />
            </button>
            {!workFlow &&
              <button className='bg-color-primary rounded-full px-4 py-1.5 text-md flex gap-2 items-center text-white' style={{ background: primaryColor }}>
                Save Changes
              </button>
            }
          </div>
        </div>

        <div className={`${workFlow ? 'bg-white border-l border-[#ECECEC]' : 'bg-[#ECECEC]'} w-full h-full`}>
          {workFlow ? 
            <Workflow />
            :
            columnsOfTable.length > 0 ?
              <TableOfModel
              table={columnsOfTable}
            />
              :
            children
          }
        </div>
      </div>
    </div>

    {/* Sidebar Left */}
    <SideBarModalLeft
      tablesOfDatabase={tablesOfDatabase}
      stateModal={sidebarModelLeft}
      changeStateSideBar={setSidebarModelLeft}
    >
      <div className='w-full p-2 bg-[#BCBCBC] text-black'>
        <ul className='text-color-primary list-disc  list-inside' style={{ color: primaryColor }}>
          <li className='text-color-primary' style={{ color: primaryColor }}>
            <span className='text-black text-md'>Current version</span>
          </li>
        </ul>
      </div>
      <HistoryChanges />
    </SideBarModalLeft>

  </div>
}
