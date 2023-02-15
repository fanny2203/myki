import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useToastContext } from "../../../context/ToastContext"; 
// components
import { InputAdornment, TextField } from '@mui/material'
import LoginLayout from './../LoginLayout'
// Icons
import { GoogleIcon, PasswordIcon, EmailIcon } from "../../../resources/icon";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { makeRequest } from "../../../helpers";

//Globals
import { useSelector } from "react-redux";

export default function Login () {
  const [username, setUserName] = useLocalStorage('username', 'Sonny Ahumada') // eslint-disable-line
  const [spacename, setSpaceName] = useLocalStorage('spacename', null) // eslint-disable-line
  const [apiKey, setApiKey] = useLocalStorage('x-api-key', null) // eslint-disable-line
  const [tutorial, setTutorial] = useLocalStorage('tutorial', null) // eslint-disable-line
  const [email, setEmail] = useLocalStorage('email', null) // eslint-disable-line
  const [customer, setCustomer] = useState({
      email: '',
      password: ''
  })
  const [warningEmail, setWarningEmail] = useState(null);
  const addToast = useToastContext()
  const navigate = useNavigate()

  const { primaryColor } = useSelector((state) => state.theme.theme);
  
  const submitHandler = async (e) => {
    e.preventDefault()
    
    setEmail(customer.email)

    const {data} = await makeRequest('user/login', 'POST', customer)
    console.log(data)
    if(data.status){
      setUserName(data.user.firstName)
      setTutorial(data.user.tutorial)
      setSpaceName(data['my-space-key'])
      setApiKey(data['x-api-key'])
      addToast('Welcome !!!', data.status)
      navigate('/'+data['my-space-key']+'/dashboard')
    }else{
      addToast(data.message, data.status)
      if (data.inactive) navigate('/register/code')
    }
  } 

  const validateEmail = (email) => {    
    if (!email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
      ) || email.length < 1) {
      setWarningEmail("Wrong email format");
      return
    }
    setWarningEmail(null);
  }
  
  const handleChange = ({ target: { name, value } }) => {
    setCustomer({ ...customer, [name]: value })

    if (name === 'email') validateEmail(value)
  }

  const BtnGoogle = () => (
    <div className="absolute bottom-14 flex items-center justify-center">
      <button
          style={{ color: primaryColor }}
          className="py-2 px-4 flex items-center justify-center gap-2 bg-neutral-100 border-2 border-red-400 rounded-full my-2 text-color-primary"
      >
          <GoogleIcon />
          Sign in with Google
      </button>
    </div>
  )
    
  return (
    <LoginLayout message='Welcome'>
      <form onSubmit={submitHandler} className='flex flex-col items-center justify-center w-full gap-6'>
        <TextField 
          label="Email" 
          type={'email'}
          name="email"
          required
          className="w-full"
          id="standard-basic" 
          variant="standard"
          placeholder="example@email.com" 
          error = {warningEmail ? true : false }
          helperText={warningEmail}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon className="input-copyIcon"/></InputAdornment>,
          }}
        />

        <TextField 
          label="Password"
          type={"password"}
          required
          name="password"
          className="w-full"
          variant="standard" 
          placeholder="********"  
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"><PasswordIcon className="input-copyIcon"/></InputAdornment>
          }}
        />

        <button
          type="submit"
          className="text-white bg-color-primary my-2 rounded-full w-full py-1"
          style={{ background: primaryColor }}
        >
          Login
        </button>

        <Link className="text-color-primary text-center" to="/login/recoveremail" style={{ color: primaryColor }}>Reset your password</Link>
        <BtnGoogle />
      </form>
    </LoginLayout>
  )
}