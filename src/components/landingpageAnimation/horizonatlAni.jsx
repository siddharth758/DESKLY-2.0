import {
  Calendar,
  Kanban,
  ListTodo,
  Folder,
  Timer,
  Brain,
  BarChart3,
  Workflow,
  ActivitySquare,
  LayoutGrid,
  GitBranch,
  FileText,
  Focus,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./horizontalAni.css";

export default function FeatureScroller() {
  const trackRef = useRef(null);

  const features = [
    { icon: Calendar, label: "Smart Calendar" },
    { icon: Kanban, label: "Kanban Boards" },
    { icon: ListTodo, label: "Task Lists" },
    { icon: Folder, label: "File Storage" },
    { icon: Timer, label: "Focus Timer" },
    { icon: Brain, label: "Mind Mapping" },
    { icon: BarChart3, label: "Gantt Charts" },
    { icon: Workflow, label: "Workflows" },
    { icon: ActivitySquare, label: "Risk Matrix" },
    { icon: LayoutGrid, label: "Priority Grid" },
    { icon: GitBranch, label: "Flowcharts" },
    { icon: FileText, label: "Quick Notes" },
    { icon: Focus, label: "Deep Work Mode" },
  ];

  useEffect(() => {
    const track = trackRef.current;

    // Animate the track
    gsap.to(track, {
      xPercent: -50, // move half its width
      duration: 30, // adjust speed
      ease: "none", // smooth constant speed
      repeat: -1, // loop forever
    });
  }, []);

  return (
    <div className="feature-scroller">
      <div className="scroll-track" ref={trackRef}>
        {features.concat(features).map((item, idx) => (
          <div key={idx} className="feature-item">
            <item.icon className="icon" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
