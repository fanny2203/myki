import { HistoryIcon } from "../resources/icon";

//Globals
import { useSelector } from "react-redux";

export default function SideBarModalLeft ({ 
  children,
  stateModal,
  changeStateSideBar,
  title 
}) {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return <>
    {stateModal && 
      <div className="bg-modal-animate backdrop-blur-md backdrop-brightness-75 w-full h-full fixed top-0 right-0 z-30 flex items-start justify-start" >
        <div className={`modal-animate-sidebar-left w-auto h-full  bg-white relative rounded-r-lg shadow-[#ccc] z-40 flex flex-col items-start justify-start gap-0`}>
          <div className="w-full flex items-end justify-between bg-color-primary"
          style={{ background: primaryColor }}
          >
            <div className="p-5 text-white gap-2 flex items-center">
              <HistoryIcon />
              <h1 className="font-eigrantch-mono text-md">History changes</h1>
            </div>
            <button className="text-xs p-5 text-white" onClick={() => changeStateSideBar(false)}>Close</button>
          </div>

          {title && <p className="text-xl font-eigrantch-mono w-full text-left">{title}</p>}
          {children}
        </div>
      </div>
    }
  </> 
}