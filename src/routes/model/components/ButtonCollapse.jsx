import { RightArrow, DBIcon } from '../../../resources/icon'

//Globals
import { useSelector } from "react-redux";

export default function ButtonCollapse ({ name, setSidebarStateModel, sidebarStateModel, selected, setCurrentTableSelect }) {
  const handleSetCurrent = () => {
    setCurrentTableSelect(name)
  }

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const getNameRefactor = (name) => {
    // console.log(name.length)
    if (name.length < 11) return name
    return name.substring(7) + '...' 
  }

  return <div className="w-full h-auto">
    <button onClick={() => handleSetCurrent(!selected)}  style={{ background: selected && primaryColor }} className={
        `w-full flex ${selected ? 'bg-color-primary text-white' : ''} justify-between items-center border border-[#BFBFBF] gap-2 rounded-md`
        }
      >
      <div className={`flex ${selected ? ' text-white justify-center ' : ' text-[#5c5c5c] justify-start '} items-center gap-3 pl-2.5 py-2.5`}>
        <DBIcon />
        <p style={{ color: !selected && primaryColor }} className={` ${selected ? 'text-white' : 'text-color-primary'} font-light text-sm`}>{sidebarStateModel && getNameRefactor(name)} </p>
      </div>

      {selected ? <div className={`text-white mr-4`}><RightArrow /></div> : ''}
    </button>
  </div>
}