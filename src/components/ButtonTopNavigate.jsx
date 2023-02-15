import { Link } from "react-router-dom";
// icon
import { RightArrow } from "../resources/icon";

//Globals
import { useSelector } from "react-redux";

export default function ButtonTopNavigate({ name }) {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <Link
      className="absolute top-0 right-0 p-4 flex items-end justify-end"
      to={"/" + name}
    >
      <button
        className="bg-color-primary rounded-full w-28 h-9.5 p-2 flex items-center justify-center text-white gap-1 capitalize"
        style={{ background: primaryColor }}
      >
        <p>{name}</p>
        <RightArrow />
      </button>
    </Link>
  );
}
