import { useState } from 'react'
import './App.css'
import './Home.css'
import './Hero.css'
import './Resume.css'
import './Services.css'
import './Contact.css'
import './Navbar.css'


import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Project from './components/Project'
import Services from './components/Services'
import Contact from './components/Contact'








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
