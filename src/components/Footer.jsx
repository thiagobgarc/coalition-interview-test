import React from 'react'
import FooterLogo from '../assets/FooterLogo.png'

const Footer = (props) => {
  return (
    <div className=' bg-slate-800 w-full h-auto top-[81.2rem] lg:top-[160rem] absolute text-end  py-5'>
        <img src={FooterLogo} alt="FooterLogo" className='w-[20%] absolute top-[.5rem] left-[20%] lg:w-[10%] lg:top-[1rem]'/>
        <p className='uppercase text-[.6rem] lg:text-[1rem] font-sans mb-[.5rem] lg:top-[160rem] bg-slate-800 mr-[15%] space-y-2 pt-3 text-slate-500 italic font-bold'>{props.text}</p>
    </div>
  )
}

export default Footer