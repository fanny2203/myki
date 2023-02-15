//Sections
import Status from "../sections/Status";
import Setup from "../sections/Setup";
import Log from "../sections/Log";

//Elements
import HeaderMyProjects from "./HeaderTwo";

//Globals
import { useSelector } from "react-redux";

const SwitchScreens = () => {
  const section = useSelector((state) => state.projectSection.section);

  return (
    <>
      <HeaderMyProjects />
      {
        {
          status: <Status />,
          setup: <Setup />,
          log: <Log />,
        }[section]
      }
    </>
  );
};

export default SwitchScreens;
