import React, { useState } from "react";
import "../management-view/management-css/managementNotes.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { StickyNote, Maximize2, Minimize2 } from "lucide-react";

function Notes() {
  const [isMaximized, setIsMaximized] = useState(false);
  return (
    <>
      <div className={`Notes-container ${isMaximized ? "maximized" : ""}`}>
        <div className="Notes-part">
          <div className="notes-div">
            <StickyNote size={24} />
            <h3>Notes</h3>
            <button
              className="maximize-btn"
              onClick={() => setIsMaximized(!isMaximized)}
            >
              {isMaximized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
          <div className="Notes-textarea">
            <textarea
              spellCheck={false}
              className="textArea"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notes;
