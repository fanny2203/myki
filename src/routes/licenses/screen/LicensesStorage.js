import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Icon
import { LayoutsIcon } from '../../../resources/icon'
import { Connection, Modeling, SaaSConnection, Users } from '../Icons'

//Globals
import { useSelector } from "react-redux";

export default function LicensesStorage () {
  const [currentStorage, setCurrentStorage] = useState(null)
  const { primaryColor } = useSelector((state) => state.theme.theme);
  
  useEffect(() => {
    // get current plan 
    //! current plan === free go to route ''
    setCurrentStorage(Math.floor(Math.random() * (100 - 1) + 1))
  }, [])

  const cards = [
    { name: 'Connections', icon: Connection, used: 5, remaining: 35 },
    { name: 'SaaS \nConnections', icon: SaaSConnection, used: 5, remaining: 10 },
    { name: 'Modeling \n& Cleansing', icon: Modeling, used: 35, remaining: 235 },
    { name: 'Users', icon: Users, used: 135, remaining: 135 }
  ]

  const StorageProgress = ({ progress }) => (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full flex items-center justify-between">
        <p>Storage</p>
        <p>{progress}% Used</p>
      </div>
      <div className="mx-2 h-16 w-full bg-gray rounded-full">
        <div
          className={"m-0 h-16 bg-color-primary rounded-full"}
          style={{ width:  progress+'%', background: primaryColor }}
        >
        </div>
      </div>
    </div>
  ) 

  const Card = ({ name, Icon, used, remaining }) => (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center gap-4 border-2 border-gray w-full h-40 rounded-t-xl'>
        <Icon />
        <p className='text-lg font-light text-justify font-eigrantch-mono whitespace-pre-wrap'>{name}</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 border-2 border-gray w-full h-40 rounded-b-xl bg-gray'>
        <div className='grid grid-cols-1 gap-5 mx-auto'>
          <div className='grid grid-cols-3 gap-4'>
            <p className='col-span-2 font-semibold'>Connections used</p>
            <p className='text-4xl font-eigrantch-mono font-medium text-color-primary' style={{ color: primaryColor }}>{used}</p>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <p className='col-span-2 font-semibold'>Connections remaining</p>
            <p className='text-4xl font-eigrantch-mono font-medium'>{remaining}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return <div className="w-full h-full px-5 pt-7">
    <div className="w-full flex items-center justify-between">
      <p className="font-medium text-2xl font-eigrantch-mono">
        Licenses
      </p>
      <div className="flex items-center justify-center gap-1 text-lg">
        <p className="py-2">Current : </p><p className="py-2 mr-4 text-color-primary" style={{ color: primaryColor }}>Free Plan</p>
        <Link to='../upgrade' className="mx-auto flex justify-center items-center gap-1 text-white bg-color-primary rounded-full px-4 py-2" style={{ background: primaryColor }}>
          <p className="font-normal text-lg">Upgrade</p>
          <LayoutsIcon />
        </Link>
      </div>
    </div>
    <hr className="text-color-primary w-full text-md my-5" style={{ color: primaryColor }}/>
    {currentStorage && <StorageProgress progress={currentStorage} />}
    <div className='grid grid-cols-4 gap-4 justify-items-center my-10'>
      {cards.map((card, index) => <Card key={index} name={card.name} Icon={card.icon} used={card.used} remaining={card.remaining} /> )}
    </div>
  </div>
}
