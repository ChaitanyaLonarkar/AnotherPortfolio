import React, { useRef } from "react";
import { Skill } from "../Json/skills";
import { Language } from "../Json/skills";

import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Skills2() {

  const sk = useRef()

  const reveal = (e) => {
    useGSAP(
      () => {
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
      },
      { scope: e }
    );
  };
  reveal(sk)
  return (
    <>
      <section className="section" id={"skills"}>
       
        <div className={"white"} ref={sk}>
          <span>My</span> <br /> Skillset
        </div>
   
        <div className="mark">
          <div className="scale">
            <div className="overlay">
              <div className="l"></div>
              <div className="r"></div>
            </div>
            <Marquee pauseOnHover="true"> 
              <div className="skills-icon">
                {Skill.map((skill, index) => (
                  <div key={index} className="each-skill" >
                    <img
                      className={"image"}
                      src={skill.image}
                      alt={skill.title}
                      width={100}
                      height={100}
                      loading={"lazy"}
                    />
                    <p
                      style={{
                        color: "White",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="scale">
            <div className="overlay2">
              <div className="l"></div>
              <div className="r"></div>
            </div>
            <Marquee direction="right" pauseOnHover="true">
              <div className="skills-icon">
                {Language.map((skill, index) => (
                  <div key={index} className="each-skill">
                    <img
                      className={"image"}
                      src={skill.image}
                      alt={skill.title}
                      width={100}
                      height={100}
                      loading={"lazy"}
                    />
                    <p
                      style={{
                        color: "White",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}
