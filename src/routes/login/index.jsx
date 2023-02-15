import { Route, Routes } from 'react-router-dom'
// Screens
import Login from './screen/Login'
import VerifyIdentity from './screen/VerifyIdentity'
import RecoverPhone from './screen/RecoverPhone'
import RecoverEmail from './screen/RecoverEmail'
import ResetPassword from './screen/ResetPassword'

export default function MenuLogin () {
  return <Routes>
    <Route path='/' element={<Login />} />
    <Route path='verifyidentity' element={<VerifyIdentity />} />
    <Route path='recoverphone' element={<RecoverPhone />} />
    <Route path='recoveremail' element={<RecoverEmail />} />
    <Route path='resetpassword' element={<ResetPassword />} />
  </Routes>
}