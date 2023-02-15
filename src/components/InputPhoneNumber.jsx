import { useState } from 'react'
// Component
import PhoneInput from "react-phone-input-2"

//Globals
import { useSelector } from "react-redux";

export default function InputPhoneNumber ({ phone, setPhone, label = true  }) {
  const [isHover, setIsHover] = useState(false);

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleMouseEnter = () =>
    setIsHover(true)

  const handleMouseLeave = () =>
    setIsHover(false)

  return <div className='w-full flex flex-col items-center justify-center'
    onClick={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <label 
      htmlFor="phone" 
      style={{ color: isHover && primaryColor }}
      className={` ${isHover ? 'text-color-primary' : 'text-[#71706f]'} text-[.753rem] font-base text-left w-full leading-none`}>{!label && 'Phone Number*'}</label>
    <PhoneInput
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: true
      }}

      id='phone'
      name='phone'
      
      inputStyle={{ width: '100%', height: '40px', fontSize: '15px', backgroundColor: 'transparent', border: 'transparent' } }
      containerStyle={{ width: '100%', height: '40px', backgroundColor: 'rgba(255, 255, 255,.0)', borderBottom: !isHover ? '1px solid #71706f':`1px solid ${primaryColor}`}}
      buttonStyle={{ backgroundColor: 'rgba(255, 255, 255,.0)', border: 'transparent'}}

      country={'mx'}

      value={phone}
      onChange={phone => setPhone(phone)}
    />
  </div>
}