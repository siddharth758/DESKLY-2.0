import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "../css/Middle.css";

function Middle() {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const buttonRef = useRef(null); // <-- ref for button

  useEffect(() => {
    // Animate h1
    const myText = new SplitType(textRef.current, { types: "chars" });
    myText.chars.forEach((char) => char.classList.add("split-char"));

    gsap.to(myText.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      delay: 3,
      duration: 0.5,
      ease: "power3.out",
    });

    // Animate p
    const paraRef = document.querySelector(".hero-section p");
    const myPara = new SplitType(paraRef, { types: "chars" });
    myPara.chars.forEach((char) => char.classList.add("split-char"));

    gsap.to(myPara.chars, {
      y: 0,
      opacity: 1,
      delay: 3.5,
      duration: 0.4,
      ease: "power3.out",
    });

    // Animate button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 4, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleGetStarted = () => {
    navigate("/sign");
  };

  return (
    <div className="middle-div">
      <div className="hero-section">
        <h1 ref={textRef}>Run Projects with Deskly</h1>
        <p>
          Your all-in-one solution to manage, track, and complete projects
          faster and smarter.
        </p>
        <button
          ref={buttonRef}
          className="cta-button"
          onClick={handleGetStarted}
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default Middle;
