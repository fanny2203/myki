// Custom components
import LayoutConnect from "../LayoutConnect";
import Info from "../Info";

//Sections
import NewConnectDrive from "./sections/NewConnectDrive";
import MyConnectionsDrive from "./sections/MyConnectionsDrive";
import Header from "../sections/Header";

//Globals
import { useSelector, useDispatch } from "react-redux";

//Actions
import { setIsCreate } from "../../../features/connect/connectByDrive";

function ConnectByDrive() {
  const dispatch = useDispatch();
  const { isCreate, showBtnRegister } = useSelector(
    (state) => state.connectByDrive
  );

  const activeCreate = () => {
    dispatch(setIsCreate(true));
  };

  const activeRegister = () => {
    dispatch(setIsCreate(false));
  };

  const addHeader = () => {
    return (
      <>
        <Header
          isCreate={isCreate}
          activeCreate={activeCreate}
          activeRegister={activeRegister}
          showBtnRegister={showBtnRegister}
        />
        {isCreate ? <NewConnectDrive /> : <MyConnectionsDrive />}
      </>
    );
  };

  return (
    <LayoutConnect
      buttonText="Save Changes"
      details={addHeader()}
      info={<Info title="Connect by drive" />}
    />
  );
}

export default ConnectByDrive;
