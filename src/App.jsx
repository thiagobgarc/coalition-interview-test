import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LAmountains from './components/LAmountains'
import LAWhiteSpacer from './components/LAWhiteSpacer'
import LAhistory from './components/LAhistory'
import LAclimb from './components/LAclimb'
import Schedule from './components/Schedule'
import Footer from './components/Footer'

function App() {
  const historyRef = useRef<HTMLImageElement | null>(null)

  return (
    <div>
      <LAmountains 
        aHref1='01.history' aHref2='02.team'/>
      <LAWhiteSpacer
        aHref1='01.history' aHref2='02.team'
      />
      <LAhistory
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at rutrum sem, a convallis elit. Proin eget maximus eros. Curabitur arcu quam, fringilla non posuere fermentum, egestas et est. Donec lacus mi, congue quis consequat quis, tempus nec justo. Nullam dignissim velit ut velit fringilla, sit amet eleifend nibh scelerisque.'/>
      <LAclimb text='Cras sed velit condimentum, tempus justo fermentum, tempus tellus. Donec sit amet tempor risus. Curabitur pretium feugiat lobortis. Curabitur ac nulla est.' 
      />
      <Schedule button1='mountain 1' button2='mountain 2'/>
      <Footer text='copyright 2016. all rights reserved.'/>
    </div>
  )
}

export default App
