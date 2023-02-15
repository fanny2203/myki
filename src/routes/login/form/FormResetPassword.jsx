import { useState } from 'react'
// components
import { TextField, InputAdornment } from "@mui/material"
// helpers
import { validatePassword } from '../../../helpers'
// Icon
import { PasswordIcon } from '../../../resources/icon'

//Globals
import { useSelector } from "react-redux";

export default function FormResetPassword () {
  const [customer, setCustomer] = useState({
    password: '',
    verifypassword: ''
  })
  const [warningPassword, setWarningPassword] = useState(null);
  const [warningVerifyPassword, setWarningVerifyPassword] = useState(null);

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const inputHandler = ({ target: { id, value }}) => {
    console.log(validatePassword(value))
    setCustomer({ ...customer, [id] : value })

    if (id === 'password') setWarningPassword(validatePassword( value ))
    if (id === 'verifypassword') matchPasswords( value )
  } 

  const matchPasswords = ( value ) => {
    if(!value.includes(customer.password)){
      setWarningVerifyPassword("Please make sure your new password match.")
      return
    }
    setWarningVerifyPassword(null)
  }

  return <form className='flex flex-col items-center justify-center gap-4'>
    <p className='font-normal text-lg text-center'>Please create a new password that you don’t use on any other site</p>
    <TextField 
      required
      className='w-full'
      id='password'
      variant="standard" 
      placeholder="New password" 
      type={"password"}
      error={warningPassword ? true : false}
      helperText = {warningPassword}
      onChange={inputHandler}
      InputProps={{
        startAdornment: <InputAdornment position="start"><PasswordIcon className="input-copyIcon"/></InputAdornment>,
      }}
    />
    <TextField
      required 
      className='w-full'
      id='verifypassword'
      variant="standard" 
      placeholder="Confirm password"  
      type={"password"}
      error = {warningVerifyPassword ? true : false}
      helperText={warningVerifyPassword}
      onChange={inputHandler}
      InputProps={{
        startAdornment: <InputAdornment position="start"><PasswordIcon className="input-copyIcon"/></InputAdornment>,
      }}
    />
    <button type='submit' className="text-white w-3/4 bg-color-primary my-2 rounded-full py-1"  style={{ background: primaryColor }}>Create new password</button>
  </form>
}