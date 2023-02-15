import { useEffect } from 'react'
import { useState } from 'react'
import { getHeaders } from '../../../helpers'

//Globals
import { useSelector } from "react-redux";

export default function HistoryChanges () {
  const [history, setHistory] = useState([])

  const { primaryColor } = useSelector((state) => state.theme.theme);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL_API + 'model/history_changes', {
      method: 'POST',
      body: JSON.stringify({
        "project_key": "5424181",
        "collection": "estudios_covid_19"
      }),
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(response => setHistory(response.transform))
    .catch(error => console.log(error))
  }, [setHistory])

  const PointIcon = () => <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7" fill="currentColor" stroke={primaryColor}/>
  </svg>
  

  const CardHistory = ({ user, date }) => <div className='w-full group flex h-10 my-2 cursor-pointer'>
    <div className='w-1/6 flex items-center justify-center text-[#EBEBEB] group-hover:text-color-primary'>
      <PointIcon />
    </div>
    <div className='bg-white flex flex-col gap-0  justify-around items-start w-5/6 h-full'>
      <p className='text-xs text-black group-hover:text-color-primary font-medium'>{date}</p>
      <p className='text-xs text-gray2 font-medium'>{user}</p>
    </div>
  </div>

  return <div className="w-full h-full flex flex-col justify-start items-start">
    {history.map((element, index) => <CardHistory user={element.name} date={element.transformation_date} key={index} />)}
  </div>
}