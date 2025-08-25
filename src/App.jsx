import {useEffect} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import AboutSection from "./components/AboutSection";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsSection1 from "./components/ProjectSection1";
import Footer from "./components/Footer";

export default function App() {
  useEffect(()=>{
    //Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Refresh SScrollTrigger when the page is fully loaded
    ScrollTrigger.refresh()

    //Clean up ScrollTrigger on Component unmount
    return()=>{
      ScrollTrigger.getAll().forEach((trigger)=>trigger.kill())
    }
  },[])
  return (
    <>
    {/* <Header /> */}
    <Header1 />
    <HeroSection />
    <CustomCursor />
    <AboutSection /> 
    {/* <ProjectsSection /> */}
    <ProjectsSection1 />
    <Footer />
    </>
  )
}