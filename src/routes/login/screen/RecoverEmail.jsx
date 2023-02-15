import { useState } from "react";
import { Link } from "react-router-dom";
// Components
import { TextField, InputAdornment } from "@mui/material";
// Layouts
import LoginLayout from "../LoginLayout";
// Icon
import { EmailIcon } from "../../../resources/icon";
// functions
import { makeRequest } from '../../../helpers'
import { useToastContext } from "../../../context/ToastContext";

//Globals
import { useSelector } from "react-redux";

export default function RecoverEmail () {
  const [email, setEmail] = useState('')
  const [warningEmail, setWarningEmail] = useState(null)
  const [isSend, setIsSend] = useState(false)
  const addToast = useToastContext()

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const recoverAccount = async (e) => {
    e.preventDefault()

    const {data: { message, status }} = await makeRequest('user/requestchangepassword', 'PUT', {email: email})
    addToast(message, status)
    setIsSend(true)
  }

  const validateEmail = ({ target: { value } }) => {    
    if (!value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
      ) || value.length < 1) {
      setWarningEmail("Wrong email format");
      return
    }
    setWarningEmail(null);
    setEmail(value)
  }

  return <LoginLayout message="Password Recovery">
    <form onSubmit={recoverAccount} className="flex flex-col items-center justify-center gap-6">
      {!isSend ? 
        <TextField 
        className="w-full"
          type={'email'}
          id="standard-basic" 
          label="Email" 
          variant="standard"
          placeholder="example@email.com" 
          error = {warningEmail ? true : false }
          helperText={warningEmail}
          onChange={validateEmail}
          required
          InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon className="input-copyIcon"/></InputAdornment>,
            }}
        />
          :
        <p className="text-lg font-normal">The recovey link was sent to email</p>
      }

      {!isSend ? 
        <button className="text-white bg-color-primary my-2 rounded-full w-full py-1"  style={{ background: primaryColor }}  id="submit-btn">
          Send email
        </button>
         :
        <Link className="text-white bg-color-primary my-2 rounded-full w-full py-1.5 text-center"  style={{ background: primaryColor }} to="/login">
          Login
        </Link>
      }
      {!isSend ? 
        <Link className="text-color-primary text-center" to="/login/recoverphone" style={{ color: primaryColor }}>Try to mobile number</Link>
          :
        <button type="button" onClick={() => setIsSend(false)} className="text-color-primary text-center" style={{ color: primaryColor }} to="">Send again</button>
      }
    </form>
  </LoginLayout>
}