//Globals
import { useSelector } from "react-redux";

const Buttons = ({ closeModal, createEvent, btnSaveActive }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleCreate = () => {
    if (btnSaveActive) {
      createEvent();
    }
  };

  return (
    <div className="flex justify-end w-full mt-[30px]">
      <button
        className="rounded-[50px] px-[10px]"
        style={{
          color: primaryColor,
        }}
        onClick={closeModal}
      >
        Cancel
      </button>
      <button
        className="px-[20px] py-[3px] text-white rounded-[50px]"
        style={{ backgroundColor: btnSaveActive ? primaryColor : "gray" }}
        onClick={() => handleCreate()}
      >
        Create event sync
      </button>
    </div>
  );
};

export default Buttons;
