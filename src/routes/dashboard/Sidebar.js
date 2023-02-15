import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
// Icons
import {
  Connect,
  Storage,
  Model,
  Projects,
  Users,
  Permissions,
  Tags,
  LookAndFeel,
  Licenses,
  Layouts,
  SetupGuide,
  Collapse,
} from "./Icons";

//Globals
import { useSelector } from "react-redux";

//I18n
import { useTranslation } from "react-i18next";

export default function Sidebar({ handleHidden, hidden }) {
  const [routeSelected, setRouteSelected] = useLocalStorage(
    "routeSelected",
    null
  );
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const [spacename, setSpaceName] = useLocalStorage("spacename", "aws3"); // eslint-disable-line

  const { t, i18n } = useTranslation();

  const changeNavigateLocation = () => {
    console.log(spacename);
    if (routeSelected === null) return;
    const list = modules.concat(configuration);
    const windowRouteCurrent = window.location?.pathname;
    const routeCurrentSelected =
      "/" + spacename + "/dashboard/" + list[routeSelected - 1].path;
    if (!windowRouteCurrent.indexOf(routeCurrentSelected)) return;
    navigate("/" + spacename + "/dashboard/" + list[routeSelected - 1].path);
  };

  useEffect(() => {
    setRouteSelected(JSON.parse(window.localStorage.getItem("routeSelected")));
    changeNavigateLocation();
  }, []); // eslint-disable-line

  useEffect(() => {
    window.localStorage.setItem("routeSelected", routeSelected);
  }, [routeSelected]);

  const modules = [
    { id: 1, name: t("connect"), path: "connect", icon: Connect },
    { id: 2, name: t("storage"), path: "storage", icon: Storage },
    { id: 3, name: t("mc"), path: "model", icon: Model },
    { id: 4, name: t("my_projects"), path: "projects", icon: Projects },
  ];
  const configuration = [
    { id: 5, name: t("users"), path: "users", icon: Users },
    {
      id: 6,
      name: t("permissions"),
      path: "permissions",
      icon: Permissions,
    },
    { id: 7, name: t("tags"), path: "tags", icon: Tags },
    { id: 8, name: t("look_and_feel"), path: "look", icon: LookAndFeel },
    { id: 9, name: t("licences"), path: "licenses", icon: Licenses },
    { id: 10, name: t("layout"), path: "layouts", icon: Layouts },
    { id: 11, name: t("setup_guide"), path: "setup", icon: SetupGuide },
  ];

  const navigate = useNavigate();

  const handlerOption = (optionSelected, path) => {
    localStorage.setItem("routeSelected", optionSelected);
    setRouteSelected(optionSelected);
    navigate(path);
  };

  const Hr = () => (
    <hr
      className={`${hidden ? "hidden" : "block"}' w-full bg-color-primary'`}
      style={{ background: primaryColor }}
    />
  );

  const Option = ({ id, name, path = "licenses", selected, Icon }) => {
    const styleButton = `${
      selected
        ? "flex items-center justify-center rounded-md bg-color-primary w-10 h-10 text-white"
        : "flex items-center justify-center hover:rounded-md  hover:bg-white w-10 h-10 hover:text-black"
    }`;
    const styleButtonShort = `${
      selected
        ? "flex items-center justify-start bg-color-primary w-full text-white h-12 pl-8 gap-2"
        : "flex items-center justify-start bg-gray w-full text-[#000000] hover:bg-white hover:text-black h-12 pl-8 gap-2"
    }`;

    return (
      <button
        onClick={() => handlerOption(id, path)}
        className={`${
          hidden
            ? "flex items-center justify-center w-full h-12"
            : "flex items-start justify-start w-full h-12 px-0 py-0"
        }`}
      >
        <div
          className={`${hidden ? styleButton : styleButtonShort}`}
          style={{ background: selected && primaryColor }}
        >
          <Icon />
          <p className={`${hidden ? "hidden" : "block"}`}>{name}</p>
        </div>
      </button>
    );
  };

  const Section = ({ title, options, btn = true, routeCurrent }) => (
    <div className=" grid grid-cols-1">
      <div
        className={`${
          !hidden ? "flex justify-between " : "flex justify-center "
        } ' items-center p-6 '`}
      >
        <p
          className={`${
            hidden ? "hidden" : "block"
          } ' text-sm font-semibold text-color-primary'`}
          style={{ color: primaryColor }}
        >
          {title}
        </p>
        {btn && (
          <button
            onClick={handleHidden}
            className={`${hidden ? "rotate-180" : "rotate-0"} ' w-6 h-6'`}
          >
            <Collapse
              className={`${hidden ? "rotate-180" : "rotate-0"} ' w-6 h-6'`}
              alt="Collapse"
            />
          </button>
        )}
      </div>
      {btn && <Hr />}
      <div
        className={`${
          hidden
            ? "flex flex-col w-full items-start justify-start"
            : "flex bg-color-primary flex-col w-full items-center justify-center"
        }`}
        style={{ background: !hidden && primaryColor }}
      >
        {options.map((item, index) => (
          <Option
            key={index}
            id={item.id}
            name={item.name}
            path={item.path}
            Icon={item.icon}
            selected={routeCurrent === item.id}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`${
        hidden ? "w-full" : "w-full"
      } " bg-gray flex flex-col border-r-2 border-[#ccc] col-span-1 mt-20 pt-20"`}
    >
      <Section
        title="Modules"
        options={modules}
        btn={true}
        routeCurrent={routeSelected}
      />
      <Hr />
      <Section
        title="Configuration"
        options={configuration}
        btn={false}
        routeCurrent={routeSelected}
      />
    </div>
  );
}
