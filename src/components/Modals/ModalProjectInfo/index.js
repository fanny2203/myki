//Components
import Modal from "../../Modal";

//Icons
import { IconFileModal } from "./elements/Icons";

//Globals
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setModalInfo } from "../../../features/modal/modalsStorage";

const ModalProjectInfo = ({ showModal }) => {
  const dispatch = useDispatch();

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const closeModal = () => {
    dispatch(setModalInfo(false));
  };

  return (
    <Modal stateModal={showModal} closeModal={closeModal} padding="p-[0px]">
      <div className="flex w-full h-full">
        <div className="flex justify-center items-center w-[30%] h-[350px] bg-gray p-[20px] text-color-primary" style={{ color: primaryColor }}>
          <IconFileModal />
        </div>
        <div className="w-[70%] h-[350px] p-[20px]">
          <p className="text-xl text-color-primary" style={{ color: primaryColor }}>File info</p>
          <p className="mt-[15px] text-lg text-gray2">Name</p>
          <p>Name Project</p>
          <p className="mt-[15px] text-lg text-gray2 rounded">Route</p>
          <div className="w-full bg-gray p-[5px]">
            <p>Root / path</p>
          </div>
          <p className="mt-[15px] text-lg text-gray2">Size</p>
          <p>31 kb</p>
          <p className="mt-[15px] text-lg text-gray2">Date added</p>
          <p>24/03/2022</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectInfo;
