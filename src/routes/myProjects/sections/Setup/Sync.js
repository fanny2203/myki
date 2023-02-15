//Icons
import { RightArrow, DeleteIcon } from "../../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

//Helpers
import { translateCronExpression } from "../../../../helpers";

const Sync = ({ showModal, data }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <>
      <div className="flex justify-between mt-[10px]">
        <p className="text-lg">Sync frecuency</p>
        <p>
          Set how often MyNiiu attempts to replicate data from your API source
          to your destination
        </p>
      </div>
      <div
        className="scroll flex h-[120px] mt-[10px]"
        style={{
          flexWrap: "wrap",
          gap: "10px",
          overflowY: "auto",
        }}
      >
        {data?.map((item, index) => (
          <div
            className="flex w-[400px] p-[5px] bg-gray rounded"
            key={index + item.id}
          >
            <p className="w-[330px]">
              {translateCronExpression(item.frecuency)}
            </p>
            <div className="flex items-center justify-center w-[70px]">
              <div
                className="border rounded w-[20px] h-[20px] mr-[10px]"
                style={{
                  borderColor: false ? primaryColor : "#D6D6D6",
                }}
              ></div>
              <div>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="flex items-center mt-[10px] text-white py-1 px-3 rounded-[50px]"
        style={{ background: primaryColor }}
        onClick={() => showModal()}
      >
        <p className="mr-[5px] mt-[-3px]">Create new event sync</p>
        <RightArrow />
      </button>
    </>
  );
};

export default Sync;
