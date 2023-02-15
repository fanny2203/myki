import { Link } from "react-router-dom";
import { TwoArrowsLeft } from "../../resources/icon";

export default function HeaderLayout ({ children, title, back = false }) {
  return <>
    <div
      className="flex items-center justify-between gap-2 m-5"
    >
      <h1 className="font-eigrantch-mono text-xl">
        {title}
      </h1>
      <div className="flex items-center justify-center gap-4">
        {back && <Link to={-1}>
          <TwoArrowsLeft />
        </Link>}
        {children}
      </div>
    </div>
    {back && <hr className="border-[0.5px] border-b-color-primary mx-5" />}
  </> 
}