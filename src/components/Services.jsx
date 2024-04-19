import React, { useRef } from 'react';
import { services } from '../Json/services';
import Marquee from 'react-fast-marquee';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Services() {
    const scale = useRef();
    const first = useRef();

    gsap.registerPlugin(ScrollTrigger);

    const reveal = (e) => {
        useGSAP(
            () => {
                if (e.current) {
                    gsap.from(e.current, {
                        yPercent: 100,
                        scrollTrigger: {
                            trigger: e.current,
                            toggleActions: 'restart pause resume reverse',
                            start: 'top 85%',
                        },
                        duration: 0.5,
                        autoAlpha: 0,
                        ease: 'power1.out',
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
            <div className="myservices experience">
                {/* <h1>What We Provide</h1> */}

                <div className="pleft " style={{ overflow: 'hidden' }}>
                    <h2 ref={scale}>
                        My <br />
                        Services
                    </h2>
                </div>
                <div className="services allExp">
                    {services.map((s, key) => (
                        // <div className="experience-detail" ref={first}>
                        <div className=" eachservice experience-detail" >
                            <div className="img" >
                              <img src={s.icon} alt="" height={210} width={400} />
                            </div>
                            <div className="service" key={key}>
                                <div className="el sl">
                                    <div className="">
                                        <h1>{s.name}</h1>
                                    </div>

                                    <div className="des">{s.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;
