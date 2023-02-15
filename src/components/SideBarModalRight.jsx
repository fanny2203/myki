//Globals
import { useSelector } from "react-redux";

export default function SideBarModalRight ({ 
  children,
  stateModal,
  changeStateSideBar,
  title 
}) {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return <>
    {stateModal && 
      <div className="bg-modal-animate backdrop-blur-md backdrop-brightness-75 w-full h-full fixed top-0 left-0 z-30 flex items-end justify-end" >
        <div className={`modal-animate-sidebar-right w-auto h-full  bg-white relative rounded-l-lg shadow-[#ccc] p-[40px] z-40 flex flex-col items-start justify-start gap-2`}>
          <div className="w-full  flex items-end justify-end">
            <button className="text-sm text-color-primary" style={{ color: primaryColor }} onClick={() => changeStateSideBar(false)}>Close</button>
          </div>
          {title && <p className="text-xl font-eigrantch-mono w-full text-left">{title}</p>}
          {children}
        </div>
      </div>
    }
  </> 
}