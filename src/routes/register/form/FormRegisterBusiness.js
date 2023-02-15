import { useState, useEffect } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { Link } from "react-router-dom";
// Icons
import { EmailIcon, PasswordIcon, CompanyIcon, WorldIcon } from "../../../resources/icon";
// Components
import { InputAdornment, TextField } from "@mui/material";
// Hooks
import { makeRequest, validateEmail, validatePassword, validatePhone } from "../../../helpers";
// Notifications Toast
import { useToastContext } from "../../../context/ToastContext";
import InputPhoneNumber from "../../../components/InputPhoneNumber";

//Globals
import { useSelector } from "react-redux";

export default function FormRegisterBusiness ({ children, handleGetStateSendCode }) {
  const [apiKey, setApiKey] = useLocalStorage('x-api-key', null) // eslint-disable-line
  const [email, setEmail] = useLocalStorage('email', null) // eslint-disable-line
  const [customer, setCustomer] = useState({
    business: true,
    email: "",
    password: '',
    // phone: '',
    company: '',
    employees: 0,
    country: '',
    space_name: ''
  })
  const [phone, setPhone] = useState()
  const [repeat, setRepeat] = useState()
  const addToast = useToastContext()
  const [warningEmail, setWarningEmail] = useState(null)
  const [warningPassword, setWarningPassword] = useState(null);
  const [warningPhone, setWarningPhone] = useState(null) // eslint-disable-line
  const [country, setCountry] = useState([])

  const { primaryColor } = useSelector((state) => state.theme.theme);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL_API + 'country/list', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => setCountry(response))
  }, [setCountry])


  const handleChange = ({ target: { id, value } }) => {
    if (id === undefined) id = 'employees'
    setCustomer({ ...customer, [id]: value })

    console.log(id, value)

    if (id === 'email') setWarningEmail( validateEmail(value))
    if (id === 'password') setWarningPassword( validatePassword(value))
    if (id === 'phone') setWarningPhone( validatePhone(value))
    if (id === 'repeat-password') setRepeat(value) 
  }

  const handlerSubmit = async (e) => {
    setCustomer({ ...customer, 'phone': phone })
    e.preventDefault()
    if (customer.password !== repeat){
      addToast('Password not equal', false)
      return
    }

    console.log(customer)

    delete customer['repeat-password']
    const {data: {message, status}} = await makeRequest('user/register', 'POST', customer)
    addToast(message, status)
    setEmail(customer.email)
    if(status) handleGetStateSendCode()
  }
  
  return <form onSubmit={handlerSubmit} className='flex flex-col items-center justify-center w-full gap-2 p-10'>
    {/* <img className="mb-2" src={isotipoIcon} alt="Register" width={70} /> */}
    {children}
    <TextField 
      label="Email" 
      type={'email'}
      id="email"
      required
      className="w-full"
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
      id="password"
      className="w-full"
      variant="standard" 
      placeholder="********"  
      error = {warningPassword ? true : false }
      helperText={warningPassword}
      onChange={handleChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><PasswordIcon className="input-copyIcon"/></InputAdornment>
      }}
    />
    <TextField 
      label="Repeat password"
      type={"password"}
      required
      id="repeat-password"
      className="w-full"
      variant="standard" 
      placeholder="********"  
      onChange={handleChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><PasswordIcon className="input-copyIcon"/></InputAdornment>
      }}
    />
    <InputPhoneNumber
      phone={phone}
      setPhone={setPhone}
      label={false}
    />
    {/* <TextField 
      className='w-full'
      id="phone" 
      label="Phone number" 
      variant="standard"
      placeholder="+529999696123" 
      error = {warningPhone ? true : false }
      helperText={warningPhone}
      onChange={handleChange}
      required
      InputProps={{
        startAdornment: <InputAdornment position="start"><PhoneIcon className="input-copyIcon"/></InputAdornment>,
      }}
    />   */}
    <TextField 
      className='w-full'
      id="company" 
      label="Company" 
      variant="standard"
      placeholder="MyNiiu" 
      onChange={handleChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><CompanyIcon className="input-copyIcon"/></InputAdornment>,
      }}
    />    
    <TextField
      className='w-full'
      label="Employees"
      id="employees"
      type={'number'}
      variant="standard"
      placeholder="Select" 
      onChange={handleChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><CompanyIcon className="input-copyIcon"/></InputAdornment>,
      }}
    />
    <div className="flex w-full bg-transparent gap-1 items-center text-[#6f706f]  border-b-[1px] my-2">
      <WorldIcon className='h-5 w-5' />
      <select id="country" onChange={handleChange} name='country' className="w-full py-2 bg-transparent text-[#9d9c9a]">
        <option selected disabled className="text-[#9d9c9a]">Select country</option>
        {country.map((site, index) => <option className="text-black" key={index} value={site.code}>{site.name}</option>)}
      </select>
    </div>
    <TextField 
      className='w-full'
      id="space_name" 
      label="Space Name" 
      variant="standard"
      placeholder="aws3" 
      type={'text'}
      onChange={handleChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><CompanyIcon className="input-copyIcon"/></InputAdornment>,
      }}
    />  
    <div className="flex items-center justify-center my-0">
      <input id="default-checkbox" type="checkbox" value="" style={{ color: primaryColor }} required className="w-5 h-5 rounded-xl text-color-primary bg-gray-100 border-gray-300 focus:ring-color-primary dark:focus:ring-color-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        I agree to the
        <a href="/" className="text-color-primary ml-1" style={{ color: primaryColor }}>teams of service</a>
      </label>
    </div>

    <button
      type="submit"
      className="text-white bg-color-primary my-2 rounded-full w-full py-1"
      style={{ background: primaryColor }}
    >
      Register
    </button>
    <Link className="text-color-primary text-center" style={{ color: primaryColor }} to="/login/recoveremail">Forgot your password</Link>
  </form>
}
