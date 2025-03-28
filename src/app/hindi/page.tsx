import React from 'react'
import Header from "../components/home/header"
import HeroSection from './components/HeroSection'
import SectionOne from './components/SectionOne'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Footer2 from './components/Footer2'
import ShareSection from './components/Share'
export default function page() {
  return (
    <div>
 
      <HeroSection/>
      <SectionOne/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <ShareSection/>
      <Footer2/>
    </div>
  )
}
