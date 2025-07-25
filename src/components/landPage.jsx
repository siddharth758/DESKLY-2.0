import "../css/LandPageNav.css";
import { Home, Settings, Workflow, Mail, LogIn, UserPlus } from "lucide-react";
import SketchBox from "./Svg";

function LandPage() {
  return (
    <>
      <div className="logo-svg">
        <SketchBox />
        <div className="landPage-navbar-div-left">
          <div className="landPage-navbar-left">
            <ul>
              <li>
                <Home size={20} />
                Home
              </li>
              <li>
                <Settings size={20} /> Features
              </li>
              <li>
                <Workflow size={20} /> Process
              </li>
              <li>
                <Mail size={20} /> Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="landPage-navbar-div-right">
          <div className="landPage-navbar-right">
            <ul>
              <li>
                <LogIn size={20} />
                Log in
              </li>
              <li>
                <UserPlus size={20} /> Sign up
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandPage;
