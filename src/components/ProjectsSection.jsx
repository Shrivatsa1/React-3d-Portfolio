import { useEffect, useRef } from "react";
import {gsap}  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const ProjectsSection = () => {
    const sectionRef=useRef(null);
    const titleRef=useRef(null);
    const titleLineRef=useRef(null);

    //Project Images data

    const projectImages=[
        {
            id:1,
            title:"Zerodha Clone",
            imgSrc:"Project-1.png"
        },
        {
            id:1,
            title:"ThinkBoard",
            imgSrc:"Project-2.png"
        },
        {
            id:1,
            title:"3D-Portfolio",
            imgSrc:"Project-3.png"
        }
    ]

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        //title reveal animation
        gsap.fromTo(
            titleRef.current,
            {
                y:100,
                opacity:0,
            },
            {
                y:0,
                opacity:1,
                duration:1.2,
                ease:"power3.out",
                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top 80%",
                    toggleActions:"play none none reverse"
                
                }
            }
        )
        //title line animation
          gsap.fromTo(
            titleLineRef.current,
            {
                width:"0%",
                opacity:0,
            },
            {
                width:"100%",
                opacity:1,
                duration:1.5,
                ease:"power3.inOut",
                delay:0.3,
                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top 80%",
                    toggleActions:"play none none reverse"
                
                }
            }
        )
    })
  return (
    <section
        ref={sectionRef}
        id="horizantol-section"
        className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    
    >
        {/* section title  */}

        <div className="container mx-auto px-4 mb-16 relative z-10">
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0">
                Featured Projects
            </h2>
            <div ref={titleLineRef} className='w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0'>

            </div>


        </div>

        {/* Horizontal scrool section  */}
        
        <div className="overflow-hidden">
            <div className="horizontal-section flex md:w-[400%] w-[420%] ">
            
                {
                    projectImages.map((project)=>{
                        <div Loading key={project.id}
                        className="panel relative flex items-center justify-center">
                            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                                <img
                                    src={project.imgSrc}
                                    alt="Project-img"
                                
                                />
                                
                                <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-boldtext-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                                    {project.title}<SlShareAlt />
                                </h2>

                            </div>
                        </div>    
                    })
                }
            </div>
        </div>

    </section>
  )
}

export default ProjectsSection