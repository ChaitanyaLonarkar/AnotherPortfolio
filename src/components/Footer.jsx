import React from "react";
import { FaHeart } from "react-icons/fa";
import { ImHappy } from "react-icons/im";
import { RiCopyrightLine } from "react-icons/ri";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Footer() {

  const first = useRef();

  const second = useRef();
  const third = useRef();
  const fourth = useRef();



  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const reveal = (e) => {
      if (e.current) {
        // const splitText = new SplitText(e.current, {
        //   type: "chars, lines",
        //   // linesClass: `${styles.splitLine}`,
        //   // lineThreshold: 5,
        // });

        // const elements = splitText.chars;

        gsap.from(e.current, {
          yPercent: 10,
          scrollTrigger: {
            trigger: e.current,
            toggleActions: "restart pause resume reverse",
            start: "top 95%",
          },
          duration: 0.7,
          autoAlpha: 0,
          ease: "power1.out",
          stagger: 0.1,
        });
      }
    };
    reveal(first)
    reveal(second)
    reveal(third)
    reveal(fourth)


    
});
  return (
    <>
      <section className="footer">
        <div className="info" >



            <p ref={first} ><RiCopyrightLine /> 2024 Chaitanya Lonarkar</p>
            <p ref={second}>Made by Chaitanya with  💗 and 😍 </p>
            <p ref={third}>Powered by React.js, GitHub and Netlify.</p>
            <p ref={fourth}>Gondia(MH), India</p>
          
          
        </div>
      </section>
    </>
  );
}
