import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../css/ScreenShot.css";
import InsideImage from "../assets/inside.png";

function ScreenShot() {
  const screenshotRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      screenshotRef.current,
      { y: 100, opacity: 0 }, // starting state
      { y: 0, opacity: 1, duration: 1, delay: 3.5, ease: "power3.out" } // animation
    );
  }, []);

  return (
    <div>
      <div className="image-div-center">
        <div className="image-div" ref={screenshotRef}>
          <img
            src={InsideImage}
            ref={screenshotRef} // ✅ fixed ref
            alt="Inside preview"
            className="adjust-image"
          />
        </div>
      </div>
      <div className="trusted">
        <p>Trusted by learner's and builders across campuses</p>
      </div>
    </div>
  );
}

export default ScreenShot;
