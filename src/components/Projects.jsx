import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import React, { useRef } from "react";

import { SiQuicklook } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { AllProjects } from "../Json/projects";

import Marquee from "react-fast-marquee";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Projects() {
  const galleryContainer = useRef();
  const blueHeading = useRef();
  const bg = useRef();
  
  const scale = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const reveal = (e) => {
    useGSAP(
      () => {
        if (e.current) {
        
          gsap.from(e.current, {
            yPercent: 100,
            scrollTrigger: {
              trigger: e.current,
              toggleActions: "restart pause resume reverse",
              start: "top 85%",
            },
            duration: 0.5,
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 1,
          });
        }
      },
      { scope: e }
    );
  };
    reveal(scale);
    

  return (
    <>

      <section className="sectionProjects" id="Projects">
        <div className="marq">
          <Marquee pauseOnHover="true" className="marquee" speed={100}>
            Showcasing Showcasing Showcasing Showcasing Showcasing Showcasing
            Showcasing Showcasing Showcasing Showcasing
          </Marquee>
        </div>
        <div className="p" ref={bg}>
          <div id="projects" className="projects" ref={galleryContainer}>
          
            <div className="pleft" ref={blueHeading} style={{overflow:"hidden"}}>
              <h2 ref={scale}>
                Selected <br />
                Works
              </h2>
            </div>
            <div className="prights">
              {AllProjects.map((project, index) => (
                <div id="project" className="project" key={index} >
                  <div className="pimg">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="desc" >
                    <h3 className="p-name">{project.title}</h3>
                    <div className="p-description">{project.description}</div>
                    <div className="techstack">
                      <div className="thead">
                        <b>Tech Stack :</b>
                      </div>
                      <div className="stack">{project.tech}</div>
                    </div>
                    <div className="live">
                      <a href={project.live}>
                        <SiQuicklook className="live-icon" />
                        Preview
                      </a>
                      <a href={project.code}>
                        <FaCode className="live-icon" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
