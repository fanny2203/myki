import React, { useEffect, useState } from "react";

//Globals
import { useSelector } from "react-redux";

const GoogleTranslate = ({ lenguaje }) => {
  // const { language } = useSelector((state) => state.languages);
  const [language, setLanguage] = useState("es");

  const handlerChangeLanguage = () => {};

  // useEffect(() => {
  //   window.googleTranslateElementInit = function () {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: "en",
  //         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       },
  //       "google_translate_element"
  //     );
  //   };
  //   setTimeout(function () {
  //     var select = document.querySelector("select.goog-te-combo");
  //     select.value = "af";
  //     select.dispatchEvent(new Event("change"));
  //   }, 1000);
  //   setTimeout(function () {
  //     var barTop = document.querySelector('[id=":2.container"]').remove();
  //     barTop.style.position = "absolute";
  //   }, 500);
  // }, [language]);

  return (
    <></>
    // <div
    //   id="google_translate_element"
    //   style={{ opacity: 0, position: "absolute" }}
    // />
  );
};

export default GoogleTranslate;
