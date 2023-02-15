import { useState } from 'react'
// components
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import { makeRequest } from '../../../helpers'
import { useToastContext } from '../../../context/ToastContext'

//Globals
import { useSelector } from "react-redux";

export default function FormPhoneCode () { 
	const [pinCode, setPinCode] = useState({
		pinOne: 0,
		pinTwo: 0,
		pinThree: 0,
		pinFour: 0
	})
	const addToast = useToastContext()
	const { primaryColor } = useSelector((state) => state.theme.theme);

	const submitHandler = async (e) => {
		e.preventDefault()

		const { data: {message, status} } = await makeRequest('check_2fac_code', 'POST', {
			phone: '+523141160772',
			code: pinCode.pinOne + '' + pinCode.pinTwo + '' + pinCode.pinThree + '' + pinCode.pinFour
		})
		addToast(message, status)
		console.log(pinCode);
	}
	
	const inputHandlerPin = ({ target: { id, value }}) => {
		if(!['1','2','3','4','5','6','7','8','9','0'].includes(value.slice(-1))){
			addToast('Only number characters are allowed', false)
			document.getElementById(id).value = ''
			return
		}
		if (value.length !== 1){
			document.getElementById(id).value = value.slice(-1)
			setPinCode({ ...pinCode, [id]: value.slice(-1)})
		}else{
			setPinCode({ ...pinCode, [id]: value})
		}
		if ('pinOne' === id) document.getElementById('pinTwo').focus()
		if ('pinTwo' === id) document.getElementById('pinThree').focus()
		if ('pinThree' === id) document.getElementById('pinFour').focus()
		if ('pinFour' === id) document.getElementById('submit-btn').focus()
	}

  return <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-4'>
  <p className='font-normal text-lg text-center'>We’ve detected unusual activity on the account you’re trying to access. <br></br> To continue, please confirm verification code.</p>

  <div className="flex items-center justify-between gap-4 w-3/4">
    <TextField id="pinOne" variant="standard" placeholder="0" onChange={inputHandlerPin} required/>
    <TextField id="pinTwo" variant="standard" placeholder="0" onChange={inputHandlerPin} required/>
    <TextField id="pinThree" variant="standard" placeholder="0" onChange={inputHandlerPin} required/>
    <TextField id="pinFour" variant="standard" maxRows={'1'} placeholder="0" onChange={inputHandlerPin} required/>
  </div>

  <button
    type='submit'
    className="text-white w-3/4 bg-color-primary my-2 rounded-full py-1"
    id="submit-btn"
	style={{ background: primaryColor }}
    >
    Enter the code
  </button>

  <Link className='text-color-primary text-center' to="/login/recoveremail" style={{ color: primaryColor }}>Reset your password</Link>
</form>
}