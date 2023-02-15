//Components
import Modal from "../../Modal";

//Globals
import { useSelector } from "react-redux";

const DeleteRole = ({ showModal, closeModal, action, title, data }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <Modal stateModal={showModal} closeModal={closeModal}>
      <div className="flex flex-col w-full">
        <p className="text-xl text-center">{title}</p>
        <div className="flex justify-center mt-[10px]">
          <button style={{ color: primaryColor }} onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            className="px-[20px] py-[3px] ml-[15px] rounded text-white"
            style={{ background: primaryColor }}
            onClick={() => action(data)}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteRole;
