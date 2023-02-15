import { useLocalStorage } from '../../../hooks/useLocalStorage'
// Icons
import { PasswordIcon, IsoTipo2 } from "../../../resources/icon";
// Components
import { InputAdornment, TextField } from "@mui/material";
// Notifications Toast
import { useToastContext } from "../../../context/ToastContext";
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../../helpers';

//Globals
import { useSelector } from "react-redux";

export default function FormValidateAccount () {
  const navigate = useNavigate()
  const [apiKey, setApiKey] = useLocalStorage('x-api-key', null) // eslint-disable-line
  const [email, setEmail] = useLocalStorage('email', null) // eslint-disable-line
  const addToast = useToastContext()

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handlerSubmit = async (e) => {
    e.preventDefault()

    const code = document.getElementById('code').value
    
    const {data: {message, status}} = await makeRequest('user/register', 'POST', {email: email, code: code})
    addToast(message, status)
    if(status) navigate('/login')
  }

  return <form onSubmit={handlerSubmit}  className='flex flex-col items-center justify-center h-5/6 w-full gap-6 p-20'>
      <IsoTipo2 alt="Register" width={70} />
      <p className=" font">Email code verification</p>
      <p>To finish signing up, please confirm your email address. This
  ensures we have the right email in case we need to contact you.</p>
    <TextField 
      label="Code"
      type={"text"}
      required
      id="code"
      className="w-full"
      variant="standard" 
      placeholder="0541"  
      InputProps={{
        startAdornment: <InputAdornment position="start"><PasswordIcon className="input-copyIcon"/></InputAdornment>
      }}
    />
    <button
      type="submit"
      className="text-white bg-color-primary my-2 rounded-full w-full py-1"
      style={{ background: primaryColor }}
    >
      Continue
    </button>
  </form>
}
