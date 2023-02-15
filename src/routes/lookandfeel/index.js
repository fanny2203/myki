import { useState } from "react"; // eslint-disable-line
import "./stylePicker.css";

//Externals
import axios from "axios"; // eslint-disable-line

//Globals
import { useSelector, useDispatch } from "react-redux"; // eslint-disable-line

//Images
import nonImage from "../../resources/images/lookAndFeel/nonImage.png";

//Constants
import { SECTIONS_COLORS } from "../../constants/sectionsColors";
import { OPTIONS_FONTS } from "../../constants/optionsFonts";

//Elements
import ItemColor from "./Elements/ItemColor";
import CustomSelect from "./Elements/CustomSelect";

//Actions
import { setIsLoading } from "../../features/Loader";
import { setTheme } from "../../features/theme";

//Helpers
import { makeRequest } from "../../helpers";

const LookAndFeel = () => {
  const dispatch = useDispatch();

  const { primaryColor } = useSelector((state) => state.theme.theme);
  const [themeData, setThemeData] = useState({ primaryColor });
  const theme = useSelector((state) => state.theme.theme);

  var x_api_key = localStorage.getItem("x-api-key").slice(1, -1);

  const updateLogo = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      dispatch(setIsLoading({ isLoading: true, textLoadin: "" }));
      var formData = new FormData();
      formData.append("file", selectedFile);
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL_API}upload_file`, formData, {
          headers: {
            "x-api-key": x_api_key,
          },
        })
        .then((response) => {
          saveLogo({ img: response.data.name });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() =>
          dispatch(setIsLoading({ isLoading: false, textLoadin: "" }))
        );
    }
  };

  const saveLogo = (data) => {
    dispatch(setIsLoading({ isLoading: true, textLoadin: "" }));
    makeRequest("configuration/change", "POST", data)
      .then((response) => {
        console.log(response);
        dispatch(setTheme(response.data.value));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>
        dispatch(setIsLoading({ isLoading: false, textLoadin: "" }))
      );
  };

  const saveLook = (data) => {
    dispatch(setIsLoading({ isLoading: true, textLoadin: "" }));
    makeRequest("configuration/change", "POST", data)
      .then((response) => {
        console.log(response);
        dispatch(setTheme({ ...theme, ...data }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>
        dispatch(setIsLoading({ isLoading: false, textLoadin: "" }))
      );
  };

  const handleColor = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setThemeData({ ...themeData, [name]: value });
  };

  const saveTheme = () => {
    saveLook(themeData);
  };

  return (
    <div
      className="flex flex-col p-[20px] w-[100%]"
      style={{ maxHeight: "calc(90vh - 10px)" }}
    >
      <div className="flex justify-end mb-4">
        <button
          className="bg-color-primary flex items-center justify-center text-white py-1 px-4"
          style={{ borderRadius: "90px", background: primaryColor }}
          onClick={() => saveTheme()}
        >
          Save changes
        </button>
      </div>
      <div className="scroll" style={{ overflowY: "auto" }}>
        <div className="border rounded-lg border-gray2 px-[10px] py-[20px] mt-[20px]">
          <input
            className="absolute mt-[40px] opacity-[0] w-[180px] h-[180px] bg-color-danger cursor-pointer"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={updateLogo}
          />
          <p className="text-lg">Logo</p>
          <img
            className="mt-4"
            width="180px"
            height="180px"
            alt=""
            src={nonImage}
          />
        </div>
        <div className="border rounded-lg border-gray2 px-[10px] py-[20px] mt-[20px] mb-[20px]">
          <p className="text-lg">Colors</p>
          <div>
            {SECTIONS_COLORS.map((section, index) => (
              <ItemColor
                key={`${section.name}-${index}`}
                section={section}
                handleColor={handleColor}
                defaultValue={themeData[section.key] || section.value}
              />
            ))}
          </div>
        </div>
        <div className="border rounded-lg border-gray2 px-[10px] py-[20px] mt-[20px]">
          <p className="text-lg">Typography</p>
          {OPTIONS_FONTS.map((data, index) => (
            <CustomSelect key={index + data.name} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookAndFeel;
