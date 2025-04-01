import { useState } from 'react'
import "../App.css"


import Hero from './Hero'
import Herotoo from './herotoo'

import Testo from './components/testo'
import CTA from './components/Cta'
import { BrowserRouter } from "react-router";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        
       
        <Hero></Hero>
        <CTA></CTA>
        <Testo></Testo>
       
        
    </>
  )
}

export default Home
