// Hooks
import { useLocalStorage } from '../../hooks/useLocalStorage'
// Components of routes
import { Route, Routes } from "react-router-dom"
import Licenses from "./screen/Licenses"
import LicensesStorage from "./screen/LicensesStorage"
import LicensesStorageWithPlan from './screen/LicensesStorageWithPlan'
import LicensesUpgrade from "./screen/LicensesUpgrade"
import LicensesMYC from './screen/LicensesM&C'
import LicensesConnect from './screen/LicensesConnect'

export default function MenuLicenses () {
  const [plan, setPlan] = useLocalStorage('plan', null)

  const handlerPlan = ( planSelected ) => 
    setPlan(planSelected)

  return  <Routes>
    <Route path='/' element={<Licenses />} />
    <Route path='storage' element={plan === null ? <LicensesStorage /> : <LicensesStorageWithPlan plan={plan} />} />
    <Route path='upgrade' element={<LicensesUpgrade handlerPlan={handlerPlan} />} />
    <Route path='myc' element={<LicensesMYC plan={plan} />} />
    <Route path='connect' element={<LicensesConnect plan={plan} /> } />
  </Routes>  
}