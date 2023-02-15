//Globals
import { useSelector } from "react-redux";

export default function Modal({
  children,
  stateModal,
  changeStateModal,
  title,
  width = "w-[500px]",
  padding = "p-[40px]",
  closeModal = () => {},
}) {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleCloseModal = (event) => {
    event.stopPropagation();
    if (event.target.id === "blur") {
      closeModal();
    }
  };
  return (
    <>
      {stateModal && (
        <div
          id="blur"
          className="bg-modal-animate backdrop-blur-md backdrop-brightness-75 w-full h-full fixed top-0 left-0 z-30 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className={`modal-animate-block  h-auto bg-white relative rounded-lg shadow-[#ccc] z-40 overflow-hidden ${width} ${padding}`}
          >
            {/* Head Modal  */}
            {title && (
              <div className="flex items-center justify-between mb-[20px] pb-[20px] border-b-[#E8E8E8] border-1">
                <h3
                  className="font-semibold text-lg text-[#2c2c2c] capitalize"
                  style={{ color: primaryColor }}
                >
                  {title}
                </h3>
                <button
                  onClick={() => changeStateModal(false)}
                  className={`text-[${primaryColor}] text-md`}
                >
                  cancel
                </button>
              </div>
            )}
            <div className="flex flex-col items-center ">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
