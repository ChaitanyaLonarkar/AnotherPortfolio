import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactForm from './ContactForm';
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Contact() {

  const c = useRef()
  const c2 = useRef()

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{

  gsap.from(c.current, {
    scrollTrigger: {
      trigger: c.current,
      toggleActions: "restart pause resume reverse",
      start: "top 75%",
    },
    scale:0.5,
    duration: 1,
    autoAlpha: 0,
    ease: "power1.out",
    stagger: 0.05,
  });
  gsap.from(c2.current, {
    scrollTrigger: {
      trigger: c2.current,
      toggleActions: "restart pause resume reverse",
      start: "top 75%",
    },
    scale:0.5,
    duration: 1,
    delay:0.3,
    autoAlpha: 0,
    ease: "power1.out",
    stagger: 0.05,
  });
})

  return (
    <>
      <section className="contact" id="Contact"  >
        <div className="cl" ref={c}>
          <h2>
            Let's <br /> Connect
          </h2>
          <p>Chaitanyalonarkar@gmail.com</p>
          <div className="icons">
            <div>

            <h3 style={{margin:0,fontWeight:400}}>Connect with Me</h3>
            </div>
            <div className="slinks clinks">
              <a href="https://www.linkedin.com/in/chaitanya-lonarkar-581960244/"
                target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ChaitanyaLonarkar" target="_blank">
                <FaSquareGithub />
              </a>
              <a href="https://twitter.com/CLonarkar24" target="_blank">
                <FaSquareXTwitter />
              </a>
              {/* <a href="http://" target="_blank"></a> */}
            </div>
          </div>
        </div>
        <div className="cr" ref={c2}>
          <div className="contact-form">
           <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
}
