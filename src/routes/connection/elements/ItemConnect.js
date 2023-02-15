//Icons
import Icons from "../icons";

//Globals
import { useDispatch, useSelector } from "react-redux";

//actions
import { toggle } from "../../../features/connect/connect";

const ItemConnect = ({ data, type }) => {
  const dispatch = useDispatch();

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleConnect = () => {
    dispatch(toggle({ type, id: data.id }));
  };

  return (
    <div
      className="flex items-center mb-[15px] cursor-pointer"
      onClick={() => handleConnect()}
    >
      <div
        className={`w-[20px] h-[20px] mr-2 flex justify-center items-center  ${
          data.active && "bg-color-primary"
        }`}
        style={{
          borderRadius: "5px",
          border: !data.active && "1px solid gray",
          background: data.active && primaryColor
        }}
      >
        {data.active && <Icons icon="check" color="#ffffff" />}
      </div>
      <p>{data.name}</p>
    </div>
  );
};

export default ItemConnect;
