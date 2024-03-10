import React from 'react'
import ClimbLogo from '../assets/Climblogo.png'

const LAclimb = (props) => {
  return (
    <div className='w-full h-auto'>
        <img src={ClimbLogo} alt="ClimbLogo" className='w-[15%] absolute top-[56rem] lg:top-[110rem] left-[20%]'/>
        <p className='absolute top-[57rem] lg:top-[113rem] left-[36%] w-[50%] lg:w-[45%] text-black text-[.6rem] lg:text-[1rem] font-sans'>{props.text}</p>
    </div>
  )
}

export default LAclimb