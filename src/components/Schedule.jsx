import React, { useState } from 'react'
import ScheduleImage from '../assets/Scheduleimage.png'
import ScheduleLogo from '../assets/Schedule.png'

const Schedule = (props) => {
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [background, setBackground] = useState(null)
    const [schedule, setSchedule] = useState(null)

  const handleClick = () => {
    setIsClicked1(!isClicked1);
    setBackground((prevImage) => prevImage === ScheduleImage ? null : ScheduleImage);
    setSchedule((prevImage) => prevImage === ScheduleLogo ? null : ScheduleLogo);
  };

  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };

  return (
    <div className='w-full h-auto'>
        <img src={background} className='w-full h-auto mt-[7.5rem] lg:mt-[15rem]'/>
        <img src={schedule} className='absolute top-[66rem] lg:top-[128rem] left-[22%] w-[20%] opacity-90'/>

        <div className=' h-auto absolute top-[61rem] lg:top-[120rem] flex flex-wrap space-x-3 lg:space-x-6 bg-slate-800 w-full py-1 lg:py-2 justify-start items-center px-[19%]'>

            <div className='text-[.8rem] lg:text-[1.1rem] text-gray-400'>
                <button className={`uppercase ${isClicked1 ? 'bg-slate-400 text-slate-800' : ''}`} onClick={handleClick}>{props.button1}</button>
            </div>
            <div className='text-[.8rem] lg:text-[1.1rem] text-gray-400'>
                <button className={`uppercase ${isClicked2 ? 'bg-slate-400 text-slate-800' : ''}`} onClick={handleClick2}>{props.button2}</button>
            </div>

        </div>
    </div>
  )
}

export default Schedule