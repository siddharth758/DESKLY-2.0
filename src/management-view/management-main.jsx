import { useNavigate } from "react-router-dom";
import "./management-css/management-main.css";
import {
  Brain,
  Timer,
  KanbanSquare,
  AlertTriangle,
  Grid2x2,
  Network,
  Clock,
  FolderPlus,
  Upload,
  Globe2,
  Plus,
  PlusCircle,
} from "lucide-react";
import FileItem from "../views/file-item/fileItem";
import Pomodro from "./managementPomodro";
import React, { useState } from "react";
import Notes from "./managementNotes";

const mapIcons = [
  {
    name: "Mind Map",
    Icon: Brain,
    desc: "Organize ideas visually",
    route: "mind-map",
  },
  {
    name: "Gantt Chart",
    Icon: Timer,
    desc: "Timeline for tasks",
    route: "gantt-chart",
  },
  {
    name: "Kanban",
    Icon: KanbanSquare,
    desc: "Track task stages",
    route: "kanban",
  },
  {
    name: "Risk Matrix",
    Icon: AlertTriangle,
    desc: "Analyze risks",
    route: "risk-matrix",
  },
  {
    name: "Eisenhower Matrix",
    Icon: Grid2x2,
    desc: "Prioritize tasks",
    route: "eisenhower",
  },
  {
    name: "Flowchart",
    Icon: Network,
    desc: "Step-by-step logic",
    route: "flowchart",
  },
];

function ManagementMain() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const addNote = () => {
    setNotes((prev) => [...prev, `Note ${prev.length + 1}`]);
  };
  return (
    <>
      <div className="heading-map">
        <h4>Go With Templates</h4>
        <div className="map-grid">
          {mapIcons.map((item, index) => (
            <div
              key={index}
              className="map-card"
              onClick={() => navigate(item.route)}
              style={{ cursor: "pointer" }}
            >
              <item.Icon size={40} className="icons" />
              <div className="name-desc">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="all-section">
        <div className="middle-map-section">
          <div className="pomodro-recent-container">
            <Pomodro />
          </div>
        </div>
        <div className="last-section">
          <div>
            <Notes />
          </div>
        </div>
        <div>{/* <div className="last-column"></div> */}</div>
      </div>
    </>
  );
}
export default ManagementMain;
