//Elememts
import IconBack from "./IconBack";
import IconQuestion from "./IconQuestion";

//Globals
import { useSelector } from "react-redux";

const ItemStep = ({ data, index, currentIndex }) => {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const isActive = () => {
    if (index === currentIndex) {
      return {primaryColor};
    }
    return "#B0B0B0";
  };
  return (
    <div
      className="flex items-center mb-4"
      style={{ opacity: index < currentIndex && "0" }}
    >
      {index > 0 && (
        <>
          <div className="w-[20px]">
            {index === currentIndex && <IconBack />}
          </div>
          <div className="flex items-center">
            <IconQuestion color={isActive()} />
            <p
              className="ml-2"
              style={{
                color: isActive(),
              }}
            >
              {data.name}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemStep;
