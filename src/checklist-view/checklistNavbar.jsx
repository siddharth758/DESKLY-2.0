import { useState } from "react";
import { Link } from "react-router-dom";
import "./checklist-css/main-navbar.css";
import {
  PanelLeft,
  ListTodo,
  CalendarDays,
  Table,
  Plus,
  Search,
  Filter,
  Wrench,
} from "lucide-react";

function CheckListNavbar() {
  const [issOpen, setIssOpen] = useState(false);

  const toggleNavbar = () => {
    setIssOpen(!issOpen);
  };
  return (
    <>
      <div className="task-container">
        <div className="task-both-list">
          <div className="task-list">
            <ul onClick={toggleNavbar}>
              <li>
                <Link to="boards">
                  <PanelLeft size={24} />
                </Link>
              </li>
              <li>
                <ListTodo size={24} />
              </li>
              <li>
                <CalendarDays size={24} />
              </li>
              <li>
                <Table size={24} />
              </li>
              <li>
                <Plus size={24} />
              </li>
              <li className="search">
                <Search size={24} />
              </li>
              <li className="filter">
                <Filter size={24} />
              </li>
              <li className="wrench">
                <Wrench size={24} />
              </li>
            </ul>
          </div>
          <div className="task-list-names">
            <ul className={issOpen ? "" : "close"}>
              <li>
                <Link to="boards">boards</Link>
              </li>
              <li>list</li>
              <li>calendar</li>
              <li>table</li>
              <li>view</li>
              <li className="searcher">search</li>
              <li className="filterer">filter</li>
              <li className="wrencher">customize</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckListNavbar;
