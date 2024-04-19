import React, { useRef } from 'react';
import { testimonials } from '../Json/testimonial';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';

function Testimonial() {
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
            <div className="testi">
                <div className="pleft " style={{ overflow: 'hidden' }}>
                    <h2 ref={scale}>
                        Client's
                        <br />
                        Feedback
                    </h2>
                </div>
                <div className="all-testi">
                    <Marquee pauseOnHover="true">
                        {testimonials.map((testimonial, key) => (
                            <div className="testimonial" key={key}>
                                <div className="info">
                                    <div className="img">
                                        <img src={testimonial.pic} alt="" />
                                    </div>
                                    <div className="name-company">
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.profession}</p>
                                    </div>
                                </div>
                                <div className="testi-desc">{testimonial.quote}</div>
                            </div>
                        ))}
                    </Marquee>
                    <Marquee direction="right" pauseOnHover="true">
                        {testimonials.map((testimonial, key) => (
                            <div className="testimonial" key={key}>
                                <div className="info">
                                    <div className="img">
                                        <img src={testimonial.pic} alt="" />
                                    </div>
                                    <div className="name-company">
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.profession}</p>
                                    </div>
                                </div>
                                <div className="testi-desc">{testimonial.quote}</div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
