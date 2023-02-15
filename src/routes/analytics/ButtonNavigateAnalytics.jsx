import { Link } from "react-router-dom";

//Globals
import { useSelector } from "react-redux";

export default function ButtonNavigateAnalytics ({ selected, name, path, id, setCurrentRoute}) {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return <Link
    onClick={() => setCurrentRoute(id)}
    to={path}
    className={
      selected ?
      'bg-color-primary text-white text-center px-2.5 py-2 rounded-md w-36 font-eigrantch-mono'
      : 
      `border border-color-primary bg-[${primaryColor}]/10 text-[#2C2C2C] text-center px-2.5 py-2 rounded-md w-36 font-eigrantch-mono`
    }
    style={{ background: selected && primaryColor, borderColor: !selected && primaryColor }}
  >
    {name}
  </Link>
}