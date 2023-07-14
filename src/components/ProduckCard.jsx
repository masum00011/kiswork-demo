import React from 'react'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import icon from '../Images/img2.jpg'
import Image from 'next/image';

export default function ProduckCard() {
  return (
    <div>       
        <div className="card1">
            <div className="icon w-[10%] m-[auto]">
            <AirportShuttleIcon fontSize="large"/>
            </div>
            {/* <Image src='https://www.kiswok.com/wp-content/uploads/2022/11/automobile-300x300.png' alt="track"/> */}
            <Image src={icon} className='w-[20rem] p-4' alt="Picture of the author"/>
            <p className="font-bold text-2xl w-[50%] m-auto py-4">Automotive Castings</p>
          </div>
    </div>
  )
}
