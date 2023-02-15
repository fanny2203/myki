import { Link } from "react-router-dom";
//Images
//Elements
import IconConnect from "./Elements/IconConnect";
import { IsoTipo2, RightArrow } from "../../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

export default function Connect  () {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="flex w-[700px] h-[450px] bg-[#F8F8F8]"
        style={{
          borderRadius: "5px",
          boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="absolute mt-[-60px] h-[120px] w-[120px] bg-white text-color-primary flex justify-center items-center"
          style={{
            borderRadius: "100%",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
            transform: "translate(290px)",
            color: primaryColor
          }}
        >
          <IsoTipo2 style={{ height: "70px" }} alt="isotipo" />
        </div>
        <div className="w-full flex justify-center items-center relative">
          <div
            className="flex justify-center items-center text-white h-[50px] w-[150px] bg-color-primary absolute"
            style={{
              top: "0px",
              right: "5%",
              borderBottomRightRadius: "15px",
              borderBottomLeftRadius: "15px",
              background: primaryColor
            }}
          >
            What's this?
          </div>
          <div className="w-[90%] h-[60%] flex flex-col items-center justify-between">
            <p className="leading-tight text-center">
              Welcome to MyNiiu! We are thrilled to be your partner in your data
              replication and analysis journey. In Hevo we offer you a highly
              intuitive, feature-rich product that addresses the maximum
              possible foreseeable business scenarios.
            </p>
            <div>
              <IconConnect />
            </div>

            <Link className="h-[80px] mt-[-20px]" to={"/connectByApi"}>
              <button
                className="relative bg-color-primary flex items-center justify-center text-white py-1 gap-4 w-[200px]"
                style={{ borderRadius: "90px", background: primaryColor }}
              >
                <p>
                  Connect now
                </p> 
                <RightArrow
                  className="h-1.5 w-3 -rotate-90 mb-[-5px] ml-[10px]"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
