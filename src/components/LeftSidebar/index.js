import { useSelector } from "react-redux";

//Globals
import { useDispatch } from "react-redux";
import { hideLeftSidebar } from "../../features/modal/modal";

//Sections
import ProfileForm from "./sections/ProfileForm";

const ModalProfile = () => {
  const dispatch = useDispatch();

  const pos = useSelector((state) => state.modal.leftSidebar.position);
  const sectionModal = useSelector((state) => state.modal.leftSidebar.section);

  return (
    <div
      className="flex w-full h-full fixed"
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: `translateX(${pos})`,
        zIndex: 100,
      }}
    >
      {
        {
          profileForm: <ProfileForm />,
        }[sectionModal]
      }
      <div
        onClick={() => dispatch(hideLeftSidebar())}
        className="absolute w-full h-full "
        style={{
          zIndex: 20,
          background: "black",
          transition: `opacity ${pos === "0%" ? "1.5s" : "0s"} ease-in-out`,
          opacity: pos === "0%" ? 0.3 : 0,
        }}
      ></div>
    </div>
  );
};

export default ModalProfile;
