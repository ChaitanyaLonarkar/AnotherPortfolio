// import React from 'react'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Creative() {
  const boldTitle = useRef();
  const boldTitleLeft = useRef();
  const boldTitleRight = useRef();
  const para = useRef();
  const para2 = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const splitTextLeft = new SplitText(boldTitleLeft.current, {
    //   type: "chars",
    // });
    // const splitTextRight = new SplitText(boldTitleRight.current, {
    //   type: "chars",
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boldTitle.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
        toggleActions: "play none none reverse",
      },
    });

    // BoldText
    tl.fromTo(
      boldTitleLeft.current,
      {
        xPercent: -50,
      },
      {
        xPercent: -10,
      },
      0
    );
    tl.fromTo(
      boldTitleRight.current,
      {
        xPercent: 50,
      },
      {
        xPercent: 10,
      },
      0
    );

    const reveal = (e) => {
      if (e.current) {
        // const splitText = new SplitText(e.current, {
        //   type: "chars, lines",
        //   // linesClass: `${styles.splitLine}`,
        //   // lineThreshold: 5,
        // });

        // const elements = splitText.chars;
        gsap.from(e.current, {
          // yPercent: -100,
          scale: 0.5,
          scrollTrigger: {
            trigger: e.current,
            toggleActions: "restart pause resume reverse",
            start: "top 95%",
          },
          duration: 0.5,
          autoAlpha: 0,
          ease: "power1.out",
          // ease:"",
          stagger: 0.02,
        });
      }
    };
    reveal(para);
    reveal(para2);

    // reveal();
  });
  return (
    <>
      <section className={"sectionn"}>
        <div className={"grid"}>
          <div className={"paragraph"} ref={para}>
            I&apos;ve worked in web designs and front-end development, so I can
            understand designs well and builds effective communication between
            team members.
          </div>
          <h2 className={"boldTitle"} ref={boldTitle}>
            <span className={"boldTitleLeft"} ref={boldTitleLeft}>
              Creative
            </span>
            <span>
              <i>Frontend</i>
            </span>
            <span className={" boldTitleRight"} ref={boldTitleRight}>
              Developer
            </span>
          </h2>
          <div className="paragraph paragraphAlt" ref={para2}>
            Currently, I live in Gondia(MH). In my personal life, I love to
            solve coding problems, exploring different technologies and
            passionate about Artificial Intelligence and Machine Learning.
          </div>

          {/* <Blobs type={"v3"} /> */}
        </div>
      </section>
    </>
  );
}
