import HeaderLayout from "../HeaderLayout";
import { Link } from "react-router-dom";

//Globals
import { useSelector } from "react-redux";

export default function Resume () {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return <div className="w-full h-full flex flex-col">
    <HeaderLayout
      title='Layout resume'
      back
    >
      <Link to='../edit' className="px-3 py-1.5 rounded-full bg-color-primary text-white w-[150px] flex items-center justify-center"  style={{ background: primaryColor }}>
        Edit
      </Link>
    </HeaderLayout>
  </div>
}