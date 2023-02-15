import { useState } from "react";
// Components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ModalProfile from "../../components/LeftSidebar";
import ModalNewConnection from "../../components/ModalNewConnection";
import Loader from "../../components/Loader"


//Globals
import { useSelector } from "react-redux";

export default function DashboardLayout ({ children }) {

  const isLoading = useSelector((state) => state.isLoading.isLoading)

  const [hidden, setHidden] = useState(false)
  
  const handleHidden = () => {
    setHidden(!hidden)
    console.log(hidden ? 'hidden' : 'blocked')
  }

  return (
    <div className="w-full h-screen p-0 bg-white m-0">
       <ModalProfile /> 
       <ModalNewConnection /> 
      {isLoading && <Loader />}
      <Navbar username='Sonny Ahumada' />
      <div className={`${hidden ? 'grid grid-cols-12 ' : 'grid grid-cols-6 '} '  bg-white w-full h-full m-0 bottom-0 '`}>
        <Sidebar
          handleHidden={handleHidden}
          hidden={hidden}
        />
        <div className={`${hidden ? 'col-span-11' : 'col-span-5'} ' w-full h-full  pt-20 '`} style={{ height: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
