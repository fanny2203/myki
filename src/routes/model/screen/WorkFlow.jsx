import { DBIcon, TransferIcon } from "../../../resources/icon"

//Globals
import { useSelector } from "react-redux";

export default function Workflow () {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const Origin = ({ name }) => <div className="h-[151px] w-[151px] bg-transparent text-white">
    <div className="fixed flex items-center justify-center flex-col h-[151px] w-[151px] gap-1">
      <TransferIcon />
      <p className="text-xs">{name}</p>
    </div>
    <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_7273_30981)">
      <circle cx="75.5" cy="75.5" r="60.5" fill={primaryColor}/>
      </g>
      <defs>
      <filter id="filter0_d_7273_30981" x="0" y="0" width="151" height="151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="7.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7273_30981"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7273_30981" result="shape"/>
      </filter>
      </defs>
    </svg>
  </div>  

  const Connector = ({ name }) => <div className="h-[151px] w-[151px] bg-transparent text-color-primary" style={{ color: primaryColor }}>
    <div className="fixed flex items-center justify-center flex-col h-[151px] w-[151px] gap-1">
      <DBIcon />
      <p className="text-xs">{name}</p>
    </div>
    <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_7273_14565)">
      <circle cx="75.5" cy="75.5" r="60.5" fill="white"/>
      <circle cx="75.5" cy="75.5" r="59.5" stroke={primaryColor} stroke-width="2"/>
      </g>
      <defs>
      <filter id="filter0_d_7273_14565" x="0" y="0" width="151" height="151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="7.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7273_14565"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7273_14565" result="shape"/>
      </filter>
      </defs>
    </svg>
  </div>

  const Line = () => <hr className="border w-[151px] border-color-primary relative" style={{borderColor: primaryColor}} />

  const ModelNumber = ({ changes_length = 9 }) => <div className="ml-11 h-[60px] w-[60px] bg-transparent text-color-primary" style={{ color: primaryColor }}>
    <div className="fixed flex items-center justify-center flex-col h-[60px] w-[60px] gap-1">
      <p className="text-md text-white">{changes_length}</p>
    </div>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="30" fill={primaryColor}/>
    </svg>
  </div>

  const Model = ({ changes }) => <div className="flex flex-col justify-around items-center w-[302px] h-[151px]">
    <div className="w-1/2 h-1/2 flex flex-col">
      <ModelNumber />
      <div className="w-1/2 border-r-2 border-color-primary h-full" style={{borderColor: primaryColor}}>

      </div>
    </div>
    <div className="border-t-2 border-t-color-primary w-[302px] h-1/2"></div>
  </div>

  return <div className="w-full h-full flex justify-center items-center">
    <Origin name='ODBC JAC API 001' />
    <Line />
    <Connector name='AC/DC' />
    <Model />
    <Origin name='JSC SD API 002' />
  </div>
}