
import React from "react";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function About() {
  const textRef = useRef();
  const h1 = useRef();
  const aboutmepara = useRef();
  const btn = useRef();
  const scale = useRef();
  const scale2 = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const reveal2 = (e) => {
      if (e.current) {
        
        gsap.from(e.current, {
          yPercent: 20,
          scale: 1,
          scrollTrigger: {
            trigger: e.current,
            toggleActions: "restart play play reverse",
            start: "top 65%",
          },
          duration: 0.8,
          autoAlpha: 0,
          ease: "power1.out",
          // ease:"",
          stagger: 1,
        });
      }
    };
    reveal2(scale2);
    reveal2(scale);
  });

  const reveal = (e) => {
    useGSAP(
      () => {
        if (e.current) {

          gsap.from(e.current, {
            yPercent: 100,
            scrollTrigger: {
              trigger: e.current,
              toggleActions: "restart pause resume reverse",
              start: "top 90%",
            },
            duration: 0.5,
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 0.009,
          });
        }
      },
      { scope: e }
    );
  };
  reveal(textRef);

  return (
    <>
      <section className="about-section" id="about">
        <div style={{ overflow: "hidden" }}>
          <div className="about-head" ref={textRef}>
            <p>About</p>
            <p>Education</p>
          </div>
        </div>
        <div className="about-edu">
          <div className="about" ref={scale}>
            <h1 ref={h1}>About Me -</h1>
            <p ref={aboutmepara}>
              As a Full Stack Developer, I'm the architect and artist of the
              digital world, blending creativity with code. From sculpting sleek
              interfaces to engineering robust backend systems, I orchestrate
              the symphony of pixels and data to craft unforgettable digital
              experiences
            </p>
            <a
              ref={btn}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <HiOutlineDocumentArrowDown style={{ fontSize: "x-large" }} />
            </a>
          </div>
          <div className="education" ref={scale2}>
            <h1>Educations -</h1>
            <div className="edu">
              <div className="edu-year">
                <h2>Computer science engineering</h2>
                <p>2022-2025</p>
              </div>
              <p>I'm 3rd year Btech Student from SB Jain COE Nagpur</p>
            </div>
            <div className="edu">
              <div className="edu-year">
                <h2>Computer engineering</h2>
                <p>2020-2022</p>
              </div>
              <p>Completed Diploma in Computer Engineering from GP Gondia</p>
            </div>
            <div className="edu">
              <div className="edu-year">
                <h2>HSC</h2>
                <p>2018-2020</p>
              </div>
              <p>Completed HSC in Science from DB Science Gondia</p>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
}
