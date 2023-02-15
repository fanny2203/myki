import HeaderLayout from "../HeaderLayout";

//Globals
import { useSelector } from "react-redux";

export default function Create () {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return <div className="w-full h-full flex flex-col">
    <HeaderLayout
      title='Create a new'
      back
    >
      <button className="px-3 py-1.5 rounded-full bg-color-primary text-white w-[150px]"
        style={{ background: primaryColor }}
      >
        Save
      </button>
    </HeaderLayout>
  </div>
}