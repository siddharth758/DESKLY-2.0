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
} from "lucide-react";
function HomeMain() {
  return (
    <>
      <div>
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
                <li></li>
                <li></li>
                <li></li>
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
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="favorites-partner">
            <HomeMainBox>
              <div className="favorites-box-content">
                <div className="favorites-box-heading">
                  <div className="favorites-box-heading-h3">
                    <h3>Favorites</h3>
                  </div>
                  <div className="favorites-box-heading-m">
                    <Maximize2 size={20} />
                    <Trash size={24} />
                  </div>
                </div>
                <ul>
                  <li></li>
                </ul>
              </div>
            </HomeMainBox>
            <div className="projects-feed-div">
              <div className="projects-feed">
                <div className="projects-feed-h3">
                  <h3>Project Feed</h3>
                </div>
                <div className="projects-feed-options">
                  <Maximize2 size={20} />
                  <Trash size={24} />
                </div>
              </div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <HomeMainBox>
            <div className="bookmark-box-content">
              <div className="bookmark-box-heading">
                <div className="bookmark-box-heading-h3">
                  <h3>Bookmark</h3>
                </div>
                <div className="bookmark-box-heading-m">
                  <Maximize2 size={20} />
                  <Trash size={24} />
                </div>
              </div>
              <ul>
                <li></li>
                <li></li>
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
