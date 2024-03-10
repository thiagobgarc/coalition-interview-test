import React from 'react'
import LAlogo from '../assets/LAlogo.png'
import LAText from '../assets/LAtext.png'

const LAWhiteSpacer = (props) => {
    const handleHistoryClick = (e) => {
        e.preventDefault()
        const scrollPosition = window.innerHeight >= 800 ? 1000 : 300;
        window.scrollTo({top: scrollPosition, left: 0, behavior: 'smooth'})
    }

    const handleTeamClick = (e) => {
        e.preventDefault()
        const scrollPosition = window.innerHeight >= 800 ? 1700 : 700;
        window.scrollTo({top: scrollPosition, left: 0, behavior: 'smooth'})
    }
  return (
    <div className='w-full h-auto mt-3 space-x-2 absolute'>
        <img src={LAlogo} className='absolute left-[20%] w-[3%] sm:w-[3%] md:w-[3%] lg:w-[3%]'/>
        <img src={LAText} className='absolute left-[23%] w-[8%]'/>
        <a href='/history'
        className='uppercase absolute top-[.25rem] lg:top-[1rem] right-[30%] w-[3%] underline decoration-1 text-rgba(255, 255, 255, 0.475) italic text-[.5rem] lg:text-[.8rem] font-bold font-sans'
        onClick={handleHistoryClick}
      >
        {props.aHref1}
      </a>
      <a href='/team'
        className='uppercase absolute top-[.25rem] lg:top-[1rem] right-[20%] w-[3%] underline decoration-1 text-rgba(255, 255, 255, 0.475) italic text-[.5rem] lg:text-[.8rem] font-bold font-sans'
        onClick={handleTeamClick}
      >
        {props.aHref2}
      </a>
    </div>
  )
}

export default LAWhiteSpacer