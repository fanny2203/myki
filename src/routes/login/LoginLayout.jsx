import { Link } from "react-router-dom"
// components
import ButtonTopNavigate from '../../components/ButtonTopNavigate'
// images
import bg from "../../resources/background/LoginBG.svg"
import logo from "../../resources/Logo-color.png";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//Globals
import { useSelector } from "react-redux";

export default function LoginLayout ({ children, message }) {
  const [spaceName, setSpaceName] = useLocalStorage('spacename', 'aws3') // eslint-disable-line

  const { primaryColor } = useSelector((state) => state.theme.theme);
  
  return (
    <main
      className="flex gap-4 flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, height: '100%'}}
    > 
      <ButtonTopNavigate name='register' />

      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        <img src={logo} alt="myniiu" className="mx-6"/>
        <h3 className="font-eigrantch-mono my-3 text-color-primary w-full text-center text-[25px]" style={{ color: primaryColor }}>{message}</h3>
        <div className="max-w-xl w-full">
          {children}
        </div>
      </div>
      <div className="bottom-0 absolute gap-4 my-8 flex flex-col items-center justify-center">
        <div className="flex gap-2 justify-center items-center">
          <Link className="text-gray-900 text-sm capitalize" to="">Terms &amp; Conditions</Link>
          <Link className="text-gray-900 text-sm capitalize" to="">Policy Privacy</Link>
        </div>
      </div>
    </main>
  )
}