import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const first = useRef();
  const head = useRef();
  const second = useRef();
  const third = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const reveal = (e) => {
      if (e.current) {
        gsap.from(e.current, {
          yPercent: 101,
          scrollTrigger: {
            trigger: e.current,
            toggleActions: "restart pause resume reverse",
            start: "top 90%",
          },
          duration: 0.2,
          autoAlpha: 0,
          ease: "power1.out",
          stagger: 0.009,
        });
      }
    };
    reveal(first)
    reveal(second)
    reveal(third)


    const reveal2 = (e) => {
    
      if (e.current) {
        
        gsap.from(e.current, {
          yPercent: 100,
          scrollTrigger: {
            trigger: e.current,
            toggleActions: "restart pause resume reverse",
            start: "top 75%",
          },
          duration: 0.5,
          autoAlpha: 0,
          ease: "power1.out",
          stagger: 0.009,
        });
      }
    }
    reveal2(head)
});


  
  

  return (
    <>
      <div className="experience">
        <div style={{overflow:"hidden"}}>

        <div className="e-head"ref={head}>
          Experience <br />
          History
        </div>
        </div>
        <div className="allExp" >
          <div className="experience-detail" ref={first}>
            <div className="el">
              <div className="h2">
                <h2>Web Developer Co-oridinator</h2>
                {/* <h2>Web Dev</h2> */}
              </div>

              <div className="des">
                Web Developer Co-oridinator in{" "}
                <b>Google Developer Student Club in SBJIT Nagpur </b>
              </div>
            </div>
            <div className="er duration">
              <p>September 2023 - Present</p>
            </div>
          </div>
          <div className="line" />
          <div className="experience-detail" ref={second}>
            <div className="el">
              <div className="h2">
                <h2>Web Designer Intern</h2>
                {/* <h2>Web Developer Co-oridinator</h2> */}
              </div>

              <div className="des">
                Work as a Web Designer in <b>Codemate It Services Nagpur</b>
              </div>
            </div>
            <div className="er duration">
              <p>July 2023 - Augest 2024</p>
              <p>Remote</p>
            </div>
          </div>
          <div className="line" />
          <div className="experience-detail" ref={third}>
            <div className="el">
              <div className="h2">
                <h2>Web Developer Intern</h2>
                {/* <h2>Web Developer Co-oridinator</h2> */}
              </div>

              <div className="des">
                One month Web developer Virtual Internship in{" "}
                <b>Bharat Intern</b>
              </div>
            </div>
            <div className="er duration">
              <p>Sept 2023 - Oct 2024</p>
              <p>Virtual</p>
            </div>
          </div>
          <div className="line" />
        </div>
      </div>
    </>
  );
}
