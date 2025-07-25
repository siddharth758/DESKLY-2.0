import "../main-components/main-com.css/mainsidebar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Home,
  LayoutDashboard,
  ListTodo,
  CalendarDays,
  Folder,
} from "lucide-react";

function MainSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-wrapper">
      {/* Sidebar Icons */}
      <div className="main-sidebar-div">
        <div className="main-sidebar">
          <ul onClick={toggleSidebar}>
            <li>
              <Link to="home">
                <Home size={20} />
              </Link>
            </li>
            <li>
              <Link to="management">
                <LayoutDashboard size={20} />
              </Link>
            </li>
            <li>
              <Link to="taskList">
                <ListTodo size={20} />
              </Link>
            </li>
            <li>
              <Link to="calender">
                <CalendarDays size={20} />
              </Link>
            </li>
            <li>
              <Link to="folder">
                <Folder size={20} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Sidebar Names with Links */}
        <div className="main-sidebar-names">
          <ul className={isOpen ? "" : "closed"}>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="management">Management</Link>
            </li>
            <li>
              <Link to="taskList">Checklist</Link>
            </li>
            <li>
              <Link to="calender">Calendar</Link>
            </li>
            <li>
              <Link to="folder">Folder</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;
