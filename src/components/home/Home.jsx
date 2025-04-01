import { useState } from 'react'
import "../../App"


import Hero from '../Hero'
import Herotoo from '../herotoo'

import Testo from '../testo'
import CTA from '../Cta'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero></Hero>
     <Herotoo></Herotoo>
        
        
        
        
        <CTA></CTA>
        <Testo></Testo>
       
        
    </>
  )
}

export default Home
