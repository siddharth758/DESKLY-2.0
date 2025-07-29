import "../management-view/management-css/managementNotes.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { StickyNote } from "lucide-react";

function Notes() {
  return (
    <>
      <div className="Notes-container">
        <div className="Notes-part">
          <div className="notes-div">
            <StickyNote size={24} />
            <h3>Notes</h3>
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
