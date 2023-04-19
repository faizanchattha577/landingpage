import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import GetApp from './GetApp'
import Newsletter from './Newsletter'
import Contact from './Contact'
import Footer  from '../../Components/FOOTER/Footer'
export default function LandingPage() {
  return (
  <div>
    <NavBar />
    <Hero />
    <GetApp/>
    <Newsletter/>
    <Contact/>
    <Footer/>

  </div>
  )
}
