//Externals
import { InputAdornment, TextField, Box } from "@mui/material";

//Icons
import Icons from "../icons";

//Constants
import { INPUTS } from "../../../constants/formModal";

//Globals
import { useSelector } from "react-redux";

const ProfileForm = () => {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  return (
    <div
        className="flex items-end w-[550px] h-[650px] bg-white"
        style={{ zIndex: 30 }}
      >
        <div className="w-[550px] h-[570px] py-[20px] px-[15px]">
          <p className="text-lg">Account details</p>
          <div className="flex flex-wrap gap-[20px]">
            {INPUTS.map((input, index) => (
              <Box
                key={input.name + index}
                sx={{ display: "flex", width: "250px", alignItems: "flex-end" }}
              >
                {input.icon && (
                  <div className="w-[20px]">
                    <Icons icon={input.icon} />
                  </div>
                )}
                <TextField
                  type={input.type}
                  name={input.name}
                  className="w-full"
                  id="standard-basic"
                  variant="standard"
                  label={input.label}
                  //error={warningEmail ? true : false}
                  //helperText={warningEmail}
                  // onChange={handleChange}
                  sx={{
                    height: "40px",
                    marginLeft: "5px",
                  }}
                />
              </Box>
            ))}
          </div>
          <p className="text-lg mt-[30px]">Security</p>
          <div className="flex gap-[20px]">
            <Box
              sx={{
                display: "flex",
                width: "250px",
                alignItems: "flex-end",
              }}
            >
              <Icons icon={"security"} />
              <TextField
                id="standard-basic"
                label="Change password"
                variant="standard"
                sx={{ width: "250px", height: "40px", marginLeft: "5px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "250px",
                alignItems: "flex-end",
              }}
            >
              <Icons icon={"security"} />
              <TextField
                id="standard-basic"
                label="Confirm new password"
                variant="standard"
                sx={{ width: "250px", height: "40px", marginLeft: "5px" }}
              />
            </Box>
          </div>
          <div className="flex items-center mt-[30px] justify-between">
            <p className="text-lg m-[0px]">Enter code</p>
            <button className="flex items-center">
              <p className="text-color-primary mt-[-2px] mr-[5px]" style={{ color: primaryColor }}>Manage</p>
              <Icons icon="rigthArrow" color={primaryColor} />
            </button>
          </div>
          <div className="flex justify-between items-end mt-[10px]">
            <div className="flex items-end">
              <Icons icon="look" color="gray" />
              <TextField
                id="standard-basic"
                label="as35d4as65d46d5as4d65ad4as654ad65asf4d56gf"
                variant="standard"
                sx={{ width: "350px", height: "40px", marginLeft: "5px" }}
              />
            </div>
            <button
              className="flex items-center border border-color-primary radius px-2 h-[30px] mb-[-5px]"
              style={{ borderRadius: "100px",  borderColor: primaryColor }}
            >
              <p className="text-color-primary m-[0px] mr-2 mt-[-2px]" style={{ color: primaryColor }}>
                validate
              </p>
              <Icons icon="key" color={primaryColor} />
            </button>
          </div>
          <div className="flex mt-[30px] justify-end w-full">
            <button
              className="flex items-center border bg-color-primary radius px-3 h-[30px]"
              style={{ borderRadius: "100px", background: primaryColor }}
            >
              <p className="text-white m-[0px] mr-[5px] mt-[-2px]">Save</p>
              <Icons icon="rigthArrow" color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
  )
}

export default ProfileForm