import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//Icons
import bg from "../../resources/bg.png";
import logo from "../../resources/Logo-color.png";

//Helpers
import { makeRequest } from "../../helpers";

const ScreenRedirect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  var counter = true;

  useEffect(() => {
    var data = {};
    if (counter) {
      try {
        const item = window.localStorage.getItem("dataCreateConnectorDrive");
        data = JSON.parse(item);
      } catch (error) {
        console.log(error);
      }
      counter = false;
      makeRequest("connector/google/authentication", "POST", {
        ...data,
        code: searchParams.get("code"),
      })
        .then((response) => {
          if (response.data.status) {
            window.location?.replace(response.data.redirect_url);
          }
        })
        .finally(() => {
          try {
            window.localStorage.removeItem("dataCreateConnectorDrive");
          } catch (error) {
            console.log(error);
          }
        });
    }
  }, []);

  return (
    <div
      className="flex justify-center items-center flex-col relative"
      style={{ height: "100vh" }}
    >
      <img className="absolute" src={bg} style={{ height: "500px" }} />
      <img src={logo} />
      <p className="text-xl">You will be redirected to MyNiiu in 5 seconds.</p>
    </div>
  );
};

export default ScreenRedirect;
