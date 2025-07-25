import CheckListNavbar from "../checklist-view/checklistNavbar";
import "../views/vc-css/task-list-view.css";
import { Outlet } from "react-router-dom";

function TaskListView() {
  return (
    <>
      <div>
        <CheckListNavbar />
        <div className="board-outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default TaskListView;
