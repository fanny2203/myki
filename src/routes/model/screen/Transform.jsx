import { useLocation } from "react-router-dom";
import LayoutModel from "../LayoutModel";

export default function Transform () {
  const {state} = useLocation()
  // console.log(state.collection.name)

  return <LayoutModel
      currentTable={state && state.collection.name}
    >
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center backdrop-blur-lg">
      <p className="text-3xl font-bold"> Not Found </p>
      <p className="text-xl font-normal text-[#9C9C9C]">please select a table </p>
    </div>
  </LayoutModel>
}