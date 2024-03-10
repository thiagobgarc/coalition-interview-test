import React from 'react'
import LAHistory from '../assets/LAhistory.png'
import Hisotrylogo from '../assets/Historylogo.png'

const LAhistory = (props) => {
  return (
    <div className='w-full h-auto'>
        <img src={LAHistory} alt="LAHistory" className='w-full h-auto my-[3rem] lg:my-[4.5rem]' />
        <img src={Hisotrylogo} alt="LAlogo" className='absolute top-[31rem] lg:top-[58rem] left-[20%] w-[15%]'/>
        <p className='absolute top-[35rem] lg:top-[66rem] left-[25%] w-[50%] lg:w-[45%] text-black text-[.6rem] lg:text-[1rem] font-sans'>{props.text}</p>
    </div>
  )
}

export default LAhistory