// import ManagementSection from "../management-view/management-section/managementSection";
import "./vc-css/management.css";
import { Outlet } from "react-router-dom";

function ManagementView() {
  return (
    <div className="management-section">
      <Outlet />{" "}
      {/* Everything renders here: either ManagementSection or MindMap */}
    </div>
  );
}

export default ManagementView;
