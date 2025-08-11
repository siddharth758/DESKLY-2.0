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
  { name: "Mind Map", Icon: Brain, desc: "Organize ideas visually" },
  { name: "Gantt Chart", Icon: Timer, desc: "Timeline for tasks" },
  { name: "Kanban", Icon: KanbanSquare, desc: "Track task stages" },
  { name: "Risk Matrix", Icon: AlertTriangle, desc: "Analyze risks" },
  { name: "Eisenhower Matrix", Icon: Grid2x2, desc: "Prioritize tasks" },
  { name: "Flowchart", Icon: Network, desc: "Step-by-step logic" },
];

function ManagementMain() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes((prev) => [...prev, `Note ${prev.length + 1}`]);
  };
  return (
    <>
      <div className="heading-map">
        <h4>Go With Templates</h4>
        <div className="map-grid">
          {mapIcons.map((item, index) => (
            <div key={index} className="map-card">
              <item.Icon size={40} className="icons" />
              <div className="name-desc">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Create-map-container">
        <div className="recents-map-div">
          <Clock size={30} />
          <h3>Recents</h3>
        </div>
        <div className="create-map-div">
          <PlusCircle size={30} />
          <h3>Create Map</h3>
        </div>
      </div>
      <div className="middle-map-section">
        <div className="star-maps-container">
          <div className="star-maps-heading">
            <h4>Starred Maps</h4>
          </div>
          <div className="star-maps-div">
            <ul>
              {["Project Alpha", "Marketing Plan", "Product Launch"].map(
                (starredSkeloton, Index) => (
                  <li key={Index}>{starredSkeloton}</li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="insights-container">
          <h3>Insights</h3>
          <div className="insights-div">
            {[
              { tasks: "Total Tasks", counts: "0" },
              { tasks: "Completed Tasks", counts: "0%" },
              { tasks: "Maps Created", counts: "0" },
              { tasks: "Active Maps", counts: "0" },
            ].map((insights, Inbox) => (
              <div key={Inbox} className="insights-parts">
                <p>{insights.tasks}</p>
                <p className="counts">{insights.counts}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="last-section">
        <div className="pomodro-recent-container">
          <Pomodro />
        </div>
        <div>
          <Notes />
        </div>
      </div>
    </>
  );
}
export default ManagementMain;
