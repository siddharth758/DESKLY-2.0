import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutSection.css";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate intro
      gsap.from(".about-intro h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".about-intro p", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate feature cards
      gsap.from(".feature-card", {
        opacity: 0,
        y: 50,

        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".about-features",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-intro">
        <h2>About Deskly</h2>
        <p>
          Deskly helps teams organize, track, and complete projects efficiently,
          making collaboration simple and productive.
        </p>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>Task Management</h3>
          <p>Create, assign, and track tasks effortlessly.</p>
        </div>
        <div className="feature-card">
          <div className="icon">⏱️</div>
          <h3>Time Tracking</h3>
          <p>Monitor project progress and deadlines.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🤝</div>
          <h3>Team Collaboration</h3>
          <p>Chat, comment, and share files in real-time.</p>
        </div>
        <div className="feature-card">
          <div className="icon">📈</div>
          <h3>Reporting & Analytics</h3>
          <p>Get insights to optimize your workflow.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
