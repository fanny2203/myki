//Components
import CustomButton from "../../../components/CustomButton";

const Header = ({
  isCreate,
  activeCreate,
  activeRegister,
  showBtnRegister,
}) => {
  return (
    <div className="flex items-center bg-gray h-[11.5vh] py-[0.5rem] px-[1rem]">
      <CustomButton
        text="New connector"
        primary={isCreate}
        action={activeCreate}
      />
      {showBtnRegister && (
        <div className="ml-[10px]">
          <CustomButton
            text="My connectors"
            primary={!isCreate}
            action={activeRegister}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
