import { useState, useEffect } from 'react'
// SVG
import { BellIcon } from '../../resources/icon'

export default function BellNotification () {
  const [notification, setNotification] = useState([1,2,3,4])

  useEffect(() => {
    setNotification([1,2,3,4,5,6])
  }, [])

  return (
    <div className="text-white flex items-center">
      <BellIcon />
      <p className='absolute rounded-full bg-red-400 text-xs px-1 top-6 z-20 ml-2'>
        {notification.length}
      </p>
    </div>  
  )
}