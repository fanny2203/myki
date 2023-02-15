import { useNavigate } from 'react-router-dom';
// Icons
import { CloudIcon, ProyectIcon, TagsIcon } from '../../../resources/icon';
// Components
import TutorialModel from "../components/TutorialModel";
import { TextField } from '@mui/material';

//Globals
import { useSelector } from "react-redux";

export default function ConnectTo () {
  const navigate = useNavigate()

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return <div className={'h-full w-full'} style={{ background: 'linear-gradient(to right, white 50%, #EBEBEB 50%)' }}>
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      
      <div className='w-full flex flex-col justify-start items-center gap-4 p-5'>

        <div className='w-full flex justify-start items-start gap-2'>
          <p className='text-color-primary text-md w-1/5 text-right pr-10' style={{ color: primaryColor }}>Name</p>
          <TextField
            type='text'
            variant="standard" 
            className='w-4/5 focus:border-b border-color-primary'
            placeholder='OBDC JAC API 01'
          />
        </div>

        <div className='w-full flex justify-start items-start gap-2'>
          <p className='text-color-primary text-md flex gap-2 w-1/5' style={{ color: primaryColor }}>
            <ProyectIcon /> Project
          </p>
          <div className='flex w-4/5 items-center px-2 bg-[#FCFCFC] font-eigrantch-mono font-normal shadow-sm'>
            <p className='text-[#010101]'>...</p>
            <select className='text-[#010101] bg-[#FCFCFC] rounded-sm py-2 w-full'>
              <option selected disabled> /Project JAC</option>
              <option > /Project Mazda</option>
              <option > /Project Jeep</option>
              <option > /Project Vuhl</option>
            </select>
          </div>
        </div>

        <div className='w-full flex justify-start items-start gap-2'>
          <p className='text-color-primary text-md flex gap-2 w-1/5' style={{ color: primaryColor }}>
            <CloudIcon /> Storage
          </p>
          <div className='flex w-4/5 items-center px-2 font-eigrantch-mono font-normal'>
            <p className='text-[#010101]'>...</p>
            <select className='text-[#010101] rounded-sm py-2 w-full' disabled>
              <option selected disabled> /Project JAC</option>
            </select>
          </div>
        </div>

        <div className='w-full flex justify-start items-start gap-2'>
          <p className='text-color-primary text-md flex gap-2 w-1/5' style={{ color: primaryColor }}>
            <TagsIcon /> Tags
          </p>
          <button className='rounded-md border border-color-primary bg-[#ECECEC] p-2 text-xs text-color-primary' style={{ color: primaryColor, borderColor: primaryColor }}>
            Add tag +
          </button>
        </div>

        <hr className='px-4 border-b border-color-primary w-full' style={{borderColor: primaryColor}} />

        <div className='flex justify-end items-center w-full gap-4 mx-4'>
          <button
            onClick={() => navigate('../')}
            className='text-md text-color-primary'
            style={{ color: primaryColor }}
          >
            Cancel
          </button>
          <button
            onClick={() => navigate('../transform')}
            className='text-md rounded-full px-2.5 py-1 text-white bg-color-primary'
            style={{ background: primaryColor }}
          >
            Save
          </button>
        </div>
      
      </div>
      <TutorialModel setup={true} />
    </div>
  </div>
}