import "../home-view/home-css/homemain.css";
import HomeMainBox from "./home-main-boxes";
import {
  Settings,
  Home,
  Maximize2,
  Trash,
  Plus,
  Upload,
  FileText,
  Clock,
  File,
  Link,
  CheckCircle2,
  AlertTriangle,
  CalendarDays,
  PieChart,
  Map,
  MapPin,
  Navigation,
  FileCheck,
} from "lucide-react";
function HomeMain() {
  return (
    <>
      <div className="homeSide">
        <div className="home-navbar-div">
          <div className="home-navbar-left">
            <ul>
              <li>
                <Home size={25} />
              </li>
              <li>Home</li>
            </ul>
          </div>
          <div className="home-navbar-right">
            <ul>
              <li>Manage</li>
              <li>
                <Settings size={25} color="#000" />
              </li>
            </ul>
          </div>
        </div>
        <div className="home-boxes">
          <div className="recents-feed-main-div">
            <div className="recents-feed-div">
              <div className="recents-feed">
                <div>
                  <h3>Recents</h3>
                </div>
                <div className="recents-feed-trash">
                  <Trash size={24} />
                </div>
              </div>
              <ul>
                <li>Maps Created</li>
                <li>Task Added</li>
              </ul>
            </div>
            <div className="activity-feed-div">
              <div className="activity-feed">
                <div>
                  <h3>Activity Feed</h3>
                </div>
                <div className="activity-feed-trash">
                  <Trash size={24} />
                </div>
              </div>
              <ul></ul>
            </div>
          </div>
          <div className="favorites-partner">
            <HomeMainBox>
              <div className="maps-box-content">
                <div className="maps-box-heading">
                  <div className="maps-box-heading-h3">
                    <h3>Maps</h3>
                  </div>
                  <div className="maps-box-heading-m">
                    <Maximize2 size={20} />
                    <Trash size={24} />
                  </div>
                </div>
                <ul>
                  <li>
                    <Map className="icon created" />
                    <span className="label">Maps Created</span>
                    <span className="value">2</span>
                  </li>
                  <li>
                    <Navigation className="icon active" />
                    <span className="label">Active Maps</span>
                    <span className="value">1</span>
                  </li>
                </ul>
              </div>
            </HomeMainBox>
            <div className="insights-feed-div">
              <div className="insights-feed">
                <div className="insights-feed-h3">
                  <h3>Insights</h3>
                </div>

                <div className="insights-feed-options">
                  <Maximize2 size={20} />
                  <Trash size={24} />
                </div>
              </div>
              <ul>
                <li>
                  <CheckCircle2 className="icon completed" />
                  <span className="label">Completed Tasks</span>
                  <span className="value">5</span>
                </li>
                <li>
                  <Clock className="icon pending" />
                  <span className="label">Pending Tasks</span>
                  <span className="value">13</span>
                </li>
                <li>
                  <AlertTriangle className="icon urgent" />
                  <span className="label">Urgent Tasks</span>
                  <span className="value">4</span>
                </li>
                <li>
                  <CalendarDays className="icon upcoming" />
                  <span className="label">Upcoming Events</span>
                  <span className="value">3</span>
                </li>
                <li>
                  <PieChart className="icon progress" />
                  <span className="label">Task Completion</span>
                  <span className="value">72%</span>
                </li>
              </ul>
            </div>
          </div>
          <HomeMainBox>
            <div className="bookmark-box-content">
              <div className="bookmark-box-heading">
                <div className="bookmark-box-heading-h3">
                  <h3>Forms</h3>
                </div>
                <div className="bookmark-box-heading-m">
                  <Maximize2 size={20} />
                  <Trash size={24} />
                </div>
              </div>
              <ul>
                <li>
                  <FileText className="icon upcoming" />
                  <span className="label">Forms created</span>
                  <span className="value">3</span>
                </li>
                <li>
                  <FileCheck className="icon progress" />
                  <span className="label">Active Forms</span>
                  <span className="value">1</span>
                </li>
              </ul>
            </div>
          </HomeMainBox>
          <div className="recent-partner">
            <div className="recent-activity">
              <ul>
                <div className="quick-heading">
                  <Clock size={20} />
                  <h3>Quick Actions</h3>
                </div>
                <li>
                  <Plus size={20} />
                  Add new project
                </li>
                <li>
                  <FileText size={20} />
                  Create notes
                </li>
                <li>
                  <Plus size={20} />
                  Add Task
                </li>
                <li>
                  <Upload size={20} />
                  Upload file
                </li>
                <li>
                  <File size={20} />
                  Upload folder
                </li>
                <li>
                  <Plus size={20} />
                  Add event
                </li>
              </ul>
            </div>
            <div className="Important-Links-div">
              <ul>
                <div className="Important-Links">
                  <Link size={20} />
                  <h3>Important Links</h3>
                  <button>ADD</button>
                </div>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Twiter</li>
                <li>Social media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
