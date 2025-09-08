import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Brain,
  Clock,
  LayoutList,
  AlertTriangle,
  Grid,
  GitBranch,
  Timer,
  FileText,
  Calendar,
  Folder,
} from "lucide-react";
import "./feature-section-css/management-tools.css";

const tools = [
  {
    id: 1,
    name: "Mind Map",
    desc: "Organize ideas visually",
    icon: <Brain size={32} />,
  },
  {
    id: 2,
    name: "Gantt Chart",
    desc: "Timeline for tasks",
    icon: <Clock size={32} />,
  },
  {
    id: 3,
    name: "Kanban",
    desc: "Track task stages",
    icon: <LayoutList size={32} />,
  },
  {
    id: 4,
    name: "Risk Matrix",
    desc: "Analyze risks",
    icon: <AlertTriangle size={32} />,
  },
  {
    id: 5,
    name: "Calendar",
    desc: "Prioritize tasks",
    icon: <Calendar size={32} />,
  },
  {
    id: 6,
    name: "Folder",
    desc: "organise logic",
    icon: <Folder size={32} />,
  },
  {
    id: 7,
    name: "Pomodoro Timer",
    desc: "Boost focus",
    icon: <Timer size={32} />,
  },
  {
    id: 8,
    name: "Notes",
    desc: "Remember",
    icon: <FileText size={32} />,
  },
];

function ManagementToolsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.1 },
      {
        opacity: 1,
        y: 0,
        scale: 0.8,
        duration: 1,
        // stagger: 0.2, // delay each card one after another
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tools-section",
          start: "top 80%", // when section top hits 80% of viewport
          toggleActions: "play reverse play reverse", // play once
        },
      }
    );
  }, []);
  return (
    <section className="tools-section">
      <div className="tools-header">
        <h2>Plan Smarter. Manage Better.</h2>
        <p>
          All-in-one management tools to track, plan, and boost productivity.
        </p>
      </div>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className="tool-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="tool-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ManagementToolsSection;
