import "./management-css/management-main.css";
import {
  Brain,
  Timer,
  KanbanSquare,
  AlertTriangle,
  Grid2x2,
  Network,
} from "lucide-react";

const mapIcons = [
  { name: "Mind Map", Icon: Brain, desc: "Organize ideas visually" },
  { name: "Gantt Chart", Icon: Timer, desc: "Timeline for tasks" },
  { name: "Kanban", Icon: KanbanSquare, desc: "Track task stages" },
  { name: "Risk Matrix", Icon: AlertTriangle, desc: "Analyze risks" },
  { name: "Eisenhower Matrix", Icon: Grid2x2, desc: "Prioritize tasks" },
  { name: "Flowchart", Icon: Network, desc: "Step-by-step logic" },
];

function ManagementMain() {
  return (
    <>
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
    </>
  );
}

export default ManagementMain;
