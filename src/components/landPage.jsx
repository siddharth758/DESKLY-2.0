import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../css/LandPageNav.css";
import { Home, Settings, Workflow, Mail, LogIn, UserPlus } from "lucide-react";
import SketchBox from "./Svg";

function LandPage() {
  const logoRef = useRef(null);
  const leftNavRef = useRef(null);
  const rightNavRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 4,
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5, y: -30 },
      { opacity: 1, scale: 1, y: 0 }
    )
      .fromTo(
        leftNavRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        rightNavRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.7"
      );
  }, []);

  return (
    <>
      <div className="logo-svg">
        <div ref={logoRef}>
          <SketchBox />
        </div>

        <div className="landPage-navbar-div-left" ref={leftNavRef}>
          <div className="landPage-navbar-left">
            <ul>
              <li>
                <Home size={20} />
                Home
              </li>
              <li>
                <Settings size={20} /> Features
              </li>
              <li>
                <Workflow size={20} /> Process
              </li>
              <li>
                <Mail size={20} /> Contact
              </li>
            </ul>
          </div>
        </div>

        <div className="landPage-navbar-div-right" ref={rightNavRef}>
          <div className="landPage-navbar-right">
            <ul>
              <li>
                <LogIn size={20} />
                Log in
              </li>
              <li>
                <UserPlus size={20} /> Sign up
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandPage;
