import { useState } from 'react'
import './App.css'
import './Home.css'
import './Hero.css'
import './Resume.css'
import './Services.css'
import './Contact.css'
import './Navbar.css'


import Home from './copmponents/Home'
import Navbar from './copmponents/Navbar'
import Hero from './copmponents/Hero'
import Resume from './copmponents/Resume'
import Project from './copmponents/Project'
import Services from './copmponents/Services'
import Contact from './copmponents/Contact'








function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Hero></Hero>
    <Resume></Resume>
    <Project></Project>
    <Services></Services>
    <Contact></Contact>

</>
  )
}

export default App
