import Image from "next/image";
import Navbar from "./components/home/header";
import HeroSection from "./components/home/HeroSection";
import Section1 from "./components/home/SectionOne"
import Section2 from "./components/home/Section2";
import Section3 from "./components/home/Section3";
import Section4 from "./components/home/Section4";
import Section5 from "./components/home/Section5";
import Footer from "./components/home/Footer";
import Section6 from "./components/home/Section6";
import Footer2 from "./components/home/Footer2";
import ShareSection from "./components/home/Share";

export default function Home() {
  return (
    <>
  
    <HeroSection/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    {/* <Footer/> */}
    <ShareSection/>
    <Footer2/>
    </>
  );
}
