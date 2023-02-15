import { useState } from 'react'
import { Link } from 'react-router-dom';
// functions
import { makeRequest } from '../../../helpers'
import { useToastContext } from '../../../context/ToastContext';
import InputPhoneNumber from '../../../components/InputPhoneNumber';

//Globals
import { useSelector } from "react-redux";

export default function FormRecoverPhone ({ handlerStateSend }) {
  const [phone, setPhone] = useState('')
  const addToast = useToastContext()

  const { primaryColor } = useSelector((state) => state.theme.theme);
  
  const getCode = async (e) => {
    e.preventDefault()
    
    console.log(phone)
    const { data: {message, status} } = await makeRequest('send_2fa_code', 'POST', { phone: phone})
    if ( status ) handlerStateSend()
    addToast(message, status)
  }

  return <form onSubmit={getCode} className='flex flex-col items-center justify-center gap-4'>
    <InputPhoneNumber
      phone={phone}
      setPhone={setPhone}
    />
    <button
      type='submit'
      className="text-white w-full bg-color-primary my-2 rounded-full py-1" 
      style={{ background: primaryColor }}
      id="submit-btn">
        Send the code
    </button>
    <Link className='text-color-primary text-center' to="/login/recoveremail" style={{ color: primaryColor }}>Try to email</Link>
  </form> 
}