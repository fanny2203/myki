import { useState } from 'react'
// Layouts
import LoginLayout from "../LoginLayout"
// components
import FormPinCode from '../form/FormPinCode'
import FormRecoverPhone from '../form/FormRecoverPhone'

export default function RecoverPhone () {
  const [isSend, setIsSend] = useState(false)

  const handlerStateSend = () => {
    setIsSend(!isSend)
  }

  return <LoginLayout message="Password Recover">
    {isSend ? <FormPinCode /> : <FormRecoverPhone handlerStateSend={handlerStateSend} /> }
  </LoginLayout>
}