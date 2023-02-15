import ButtonNavigateAnalytics from "./ButtonNavigateAnalytics";

//Globals
import { useSelector } from "react-redux";

export default function LayoutAnalytics ({ children, currentRoute, setCurrentRoute, items }) {
  console.log(currentRoute)
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return <div className="w-full h-screen p-5 bg-white m-0">
    <div className="w-full flex items-center justify-between py-2">
      {
        items.map((item, index) => <ButtonNavigateAnalytics
          key={index}
          id={item.id}
          setCurrentRoute={setCurrentRoute}
          selected={item.id === currentRoute}
          name={item.name}
          path={item.path}
        />)
      }
    </div>
    <hr className="border-[0.7px] border-color-primary" style={{borderColor: primaryColor}} />
    <div className="w-full">
      {children}
    </div>
  </div>
}