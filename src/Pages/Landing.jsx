import React from 'react'
import Hero from '../Components/Hero'
import Pricing from '../Components/Pricing'
import Assistant from '../Components/Assistant'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Aboutus from '../Components/Aboutus'

const Landing = () => {
  return (
    <div>
      <Hero/>
      <Assistant/>
      <Aboutus/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing