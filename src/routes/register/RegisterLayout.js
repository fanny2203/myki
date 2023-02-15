// Components
import ButtonTopNavigate from '../../components/ButtonTopNavigate'
// Logo
import Logo from "../../resources/Logo.png"
// Images
import TemporalVideo from "../../resources/images/temporalVideo.png"
import bg from "../../resources/background/registerBg.png"
// Icon
import { GoogleIcon } from "../../resources/icon"

//Globals
import { useSelector } from "react-redux";


export default function RegisterLayout ({ children }) {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const ItemList = ({ text }) => <li className="flex">
    <div
      className="h-[5px] min-w-[5px] bg-white mr-1 ml-1 mt-3"
      style={{ borderRadius: "100%" }}
    ></div>
    {text}
  </li>

  const BtnGoogle = () => <div className="flex items-center justify-center">
    <button
        style={{ color: primaryColor }}
        className="py-2 px-4 flex items-center justify-center gap-2 bg-neutral-100 border-2 border-red-400 rounded-full my-2 text-color-primary"
    >
        <GoogleIcon />
        Sign in with Google
    </button>
  </div>

  return <div className='h-screen w-full grid grid-cols-2 gap-0 justify-items-center'>
    <div className="bg-color-primary h-full w-full" style={{ background: primaryColor }}>
      <div className="flex p-2 relative flex-col justify-center items-center h-screen bg-color-primary"  style={{ background: primaryColor }}>
        <div className="flex flex-col h-[70%] w-[450px] items-center justify-around">
          <img src={Logo} width={300} alt="logo" />
          <p className="text-2xl text-white font-thin">Benefits</p>
          <ul className="text-white font-thin">
            <ItemList text="Taciti pretium a suscipit ad proin ipsum conubia posuere." />
            <ItemList
            text="Eros enim ac a habitasse adipiscing a habitasse bibendum
              scelerisque cubilia morbi condimentum."
            />
            <ItemList text="A id purus ut maecenas." />
          </ul>
          <img src={TemporalVideo} width={440} alt="Temporal video" />
        </div>
        <div className="flex text-white absolute mb-6" style={{ bottom: 15 }}>
          <p className="mr-2 cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">Policy Privacy</p>
        </div>
      </div>
    </div>
    <div
      className="bg-gray h-full w-full bg-cover bg-center p-20"
      style={{ backgroundImage: `url(${bg})`, height: '100%'}}
    >
      {children}
      <BtnGoogle />
    </div>
    <ButtonTopNavigate name='login' />
  </div>
}