import { useState, useEffect } from "react";
// Logo
import Logo from "../../resources/Logo.png";
// Icons
import { AddAccount, BottomArrow, IsoTipo } from "../../resources/icon";
// Images
import BellNotification from "./BellNotification";
//constants
import { LANGUAGES } from "../../constants/languages";
import { PROFILE_MENU } from "../../constants/profileMenu";
//Elements
import ItemList from "./Elements/ItemList";
//Globals
import { useDispatch, useSelector } from "react-redux";
import { showLeftSidebar } from "../../features/modal/modal";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { setTheme } from "../../features/theme";

//Helpers
import { makeRequest } from "../../helpers";

//I18n
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../translations";

export default function Navbar() {
  const { primaryColor, img } = useSelector((state) => state.theme.theme);

  const [username, setUserName] = useLocalStorage("username", "Sonny Ahumada"); // eslint-disable-line
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMenuProfile, setshowMenuProfile] = useState(false);
  const [languageSelected, setLanguageSelected] = useState("en");

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getTheme();
  }, []);

  const getTheme = async () => {
    try {
      const result = await makeRequest("configuration/get", "GET");
      dispatch(setTheme(result.data[0].value));
    } catch (e) {}
  };

  const actions = (value) => {
    if (value === "profile") {
      dispatch(showLeftSidebar("profileForm"));
      setshowMenuProfile(false);
    }
  };

  const toggleLanguage = (value) => {
    changeLanguage(value);
    setLanguageSelected(value);
    setShowLanguages(false);
  };

  return (
    <div
      className="w-full bg-color-primary flex justify-between items-center px-10 py-4 m-0 h-20 absolute"
      style={{ background: primaryColor }}
    >
      <img src={img?.url} className="h-10" alt="Logo" />
      <div className="flex items-center justify-center gap-4 text-white font-medium">
        <BellNotification />
        <div className="flex gap-2 justify-center items-center">
          <p>Invite a friend</p>
          <AddAccount className="h-4" />
        </div>
        <div
          className="relative"
          tabIndex={0}
          onBlur={() => setShowLanguages(false)}
          onClick={() => setShowLanguages(true)}
        >
          <div className="gap-2 flex items-center justify-center cursor-pointer">
            <div className="font-semibold rounded-full p-2 border-2 border-white relative ">
              <p>US</p>
            </div>
            <BottomArrow className="h-2" />
          </div>
          {showLanguages && (
            <div
              className="absolute text-black bg-white w-[170px] p-4"
              style={{
                top: "50px",
                borderRadius: "5px",
                boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.2)",
                zIndex: 1000,
              }}
            >
              {LANGUAGES.map((language, index) => (
                <ItemList
                  key={index + language.name}
                  data={language}
                  action={toggleLanguage}
                  languageSelected={languageSelected}
                />
              ))}
            </div>
          )}
        </div>
        <div
          className="relative"
          tabIndex={0}
          onFocus={() => setshowMenuProfile(true)}
          onBlur={() => setshowMenuProfile(false)}
        >
          <div>
            <div className="py-2 px-3 rounded-full flex items-center justify-center gap-2 border-2 border-white cursor-pointer">
              <IsoTipo className="h-6" />
              <p>{username}</p>
              <BottomArrow className="h-2" />
            </div>
            {showMenuProfile && (
              <div
                className="absolute text-black bg-white w-[230px] p-4"
                style={{
                  top: "50px",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.2)",
                  zIndex: 1000,
                }}
              >
                {PROFILE_MENU.map((section, index) => (
                  <ItemList
                    key={index + section.name}
                    data={section}
                    icon={true}
                    action={actions}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
