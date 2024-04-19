import React from "react";
import myimg from "../assets/img/meriIMG.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import { useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const [count, setCount] = useState(0);

  const h3 = useRef();
  const textRef = useRef();
  const h1 = useRef();
  const kbtn = useRef();
  const merimg = useRef();

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
            stagger: 0.05,
          });
        }
      },
      { scope: e }
    );
  };
  reveal(textRef);
  reveal(h3);
  reveal(h1);

  useGSAP(()=>{
  // reveal(kbtn)
  gsap.from(merimg.current, {
    scale:0.5,
    duration: 1,
    autoAlpha: 0,
    ease: "power1.out",
    stagger: 0.05,
  });

  gsap.from(kbtn.current , {
    yPercent: 100,
    duration: 0.5,
    autoAlpha: 0,
    ease: "power1.out",
    stagger: 0.05,
  });
  
})


  return (
    <>
      <section className="home">
        <div className="left-img" ref={merimg}>
          <img src={myimg} alt="Chaitanya" />
        </div>
        <div className="left">
          <div className="div" style={{ overflow: "hidden" }}>
            <h3 className="h3" ref={textRef}>
              CHAITANYA LONARKAR
            </h3>
          </div>
          <div className="div" style={{ overflow: "hidden" }}>
            <h1 ref={h3}>Frontend Developer</h1>
          </div>
          <div className="f">
            <div className="div" style={{ overflow: "hidden" }}>
              <h1 className="ff" ref={h1}>
                -FullStack Developer
              </h1>
            </div>
            <div className="fff"></div>
          </div>
          <div className="kbtn" ref={kbtn} style={{overflow:"hidden"}}>
            {/* <button>Know Me</button> */}
            
            <button>
              <a href="#Allsection">Get to Know Me</a>
            </button>
            <div className="slinks">
              <a
                href="https://www.linkedin.com/in/chaitanya-lonarkar-581960244/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/ChaitanyaLonarkar" target="_blank">
                <FaSquareGithub />
              </a>
              <a href="https://twitter.com/CLonarkar24" target="_blank">
                <FaSquareXTwitter />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}