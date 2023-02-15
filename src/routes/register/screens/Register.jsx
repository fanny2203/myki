import { useState } from 'react'
// forms
import FormValidateAccount from "../form/FormValidateAccount";
import FormRegisterPersonal from '../form/FormRegisterPersonal';
import FormRegisterBusiness from '../form/FormRegisterBusiness';
// Layout
import RegisterLayout from "../RegisterLayout";
// Icons
import { UsersIcon, UserIcon } from '../../../resources/icon';

//Globals
import { useSelector } from "react-redux";

export default function Register () {
  const [sendCode, setIsSendCode] = useState(false) 
  const [typeAccount, setTypeAccount] = useState('personal')

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleGetStateSendCode = () => 
  setIsSendCode(!sendCode)

  const handleTypeAccount = () => {
    if (typeAccount === 'personal') setTypeAccount('business')
    if (typeAccount === 'business') setTypeAccount('personal')
  }

  const SwitchTypeAccount = () => <div className='w-full h-10 shadow-lg grid grid-cols-2 mb-10'>
    <button 
      onClick={handleTypeAccount}
      style={{ background: typeAccount === 'business' && primaryColor, color: !typeAccount === 'business' && primaryColor }} 
      className={`${typeAccount === 'business' ? 'bg-color-primary text-white' : 'text-color-primary bg-white'} ' rounded-l-lg p-2 flex items-center justify-center gap-1 capitalize'`} disabled={(typeAccount === 'business')}>
      <p>
        Business
      </p>
      <UsersIcon />
    </button>  
    <button 
      onClick={handleTypeAccount} 
      style={{ background: typeAccount === 'personal' && primaryColor, color: !typeAccount === 'personal' && primaryColor }}
      className={`${typeAccount === 'personal' ? 'bg-color-primary text-white' : 'text-color-primary bg-white'} ' rounded-r-lg p-2 flex items-center justify-center gap-1 capitalize'`} disabled={(typeAccount === 'personal')}>
      <p>
        Personal
      </p>
      <UserIcon />
    </button>  
  </div>

  const FormControlRegister = () => {
    if (typeAccount === 'personal') return <FormRegisterPersonal handleGetStateSendCode={handleGetStateSendCode}> <SwitchTypeAccount /> </FormRegisterPersonal>
    if (typeAccount === 'business') return <FormRegisterBusiness handleGetStateSendCode={handleGetStateSendCode}> <SwitchTypeAccount /> </FormRegisterBusiness>
  }

  return <RegisterLayout>
    {!sendCode ? <FormControlRegister /> : <FormValidateAccount />}
  </RegisterLayout>
} 