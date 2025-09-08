import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./intro.css";

import SplitType from "split-type";

function IntroAnimation({ children }) {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const myText = new SplitType(textRef.current);

    myText.chars.forEach((char) => char.classList.add("split-char"));

    gsap.to(myText.chars, {
      y: 0,
      stagger: 0.2,
      delay: 1,
      duration: 0.1,
      ease: "power1.out",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    });

    gsap.set(bgRef.current, { opacity: 1 });
    gsap.set(textRef.current, { opacity: 0, y: 0 });

    // tl.to(topRef.current, { y: 0 }, "0") // move down from top
    //   .to(bottomRef.current, { y: 0 }, "0") // move up from bottom
    //   .to(containerRef.current, { opacity: 0, duration: 0.9, delay: 5 }) // fade out overlay
    //   .set(containerRef.current, { display: "none" }); // remove from DOM
    tl.to(
      topRef.current,
      {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      "start"
    ).to(
      bottomRef.current,
      {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      "start"
    );
    tl.to(
      topRef.current,
      {
        y: "-100%",
        duration: 1.3,
        ease: "power4.inOut",
      },
      "middle"
    )
      .to(
        bottomRef.current,
        {
          y: "100%",
          duration: 1.3,
          ease: "power4.inOut",
        },
        "middle"
      )
      .to(textRef.current, { opacity: 1, y: 0, duration: 1 }, "<");

    tl.to(textRef.current, { opacity: 0, duration: 0.6 })
      .to(topRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power4.inOut",
      })
      .to(
        bottomRef.current,
        {
          y: "100%",
          duration: 0.5,
          ease: "power4.inOut",
        },
        "<"
      )
      .set(containerRef.current, { display: "none" });
  }, []);

  return (
    <>
      {/* Intro Overlay */}
      <div className="intro-container" ref={containerRef}>
        <div className="intro-bg" ref={bgRef}></div>
        <div className="intro-panel top" ref={topRef}></div>
        <div className="intro-panel bottom" ref={bottomRef}></div>
        <h1 className="intro-text-deskly" ref={textRef}>
          Deskly
        </h1>
      </div>

      {/* Landing Page */}
      <div className="landing-page">{children}</div>
    </>
  );
}

export default IntroAnimation;
