import React, { useRef } from 'react' 
import LAMountains from '../assets/LAmountains.png'
import LAlogo from '../assets/LAlogo.png'

const LAmountains = (props) => {
    const handleHistoryClick = (e) => {
        e.preventDefault()
        const scrollPosition = window.innerHeight >= 800 ? 900 : 300;
        window.scrollTo({top: scrollPosition, left: 0, behavior: 'smooth'})
    }

    const handleTeamClick = (e) => {
        e.preventDefault()
        const scrollPosition = window.innerHeight >= 800 ? 1700 : 700;
        window.scrollTo({top: scrollPosition, left: 0, behavior: 'smooth'})
    }

  return (
    <div>
      <img src={LAMountains} alt="LAMountains" className='w-full h-auto' />
      <img src={LAlogo} alt="LAlogo" className='absolute top-[.3rem] left-[20%] w-[3%]'/>
      <a href='/history' id='history'
        className='uppercase absolute top-[1rem] right-[30%] w-[3%] underline decoration-1 text-white italic text-[.5rem] lg:text-[.8rem] font-bold'
        onClick={handleHistoryClick}
      >
        {props.aHref1}
      </a>
      <a href='/team'
        className='uppercase absolute top-[1rem] right-[20%] w-[3%] underline decoration-1 text-white litaic text-[.5rem] lg:text-[.8rem] font-bold'
        onClick={handleTeamClick}
      >
        {props.aHref2}
      </a>
    </div>
  )
}

export default LAmountains