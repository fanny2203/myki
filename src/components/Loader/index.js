//Components
import Spinner from "../Spinner";

//Globals
import { useSelector } from "react-redux";

const Loader = () => {
  const textLoader = useSelector((state) => state.isLoading.textLoading);
  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div
      className="h-full w-full fixed flex justify-center items-center"
      style={{ zIndex: 1000 }}
    >
      <div
        className="absolute flex flex-col items-center"
        style={{
          zIndex: 20,
        }}
      >
        <Spinner color={primaryColor} />
        <p className="text-white text-xl">{textLoader}</p>
      </div>
      <div
        className="h-full w-full"
        style={{
          background: "black",
          opacity: 0.7,
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

export default Loader;
