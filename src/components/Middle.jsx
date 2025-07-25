import { useNavigate } from "react-router-dom";
import "../css/Middle.css";

function Middle() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign");
  };
  return (
    <>
      <div className="middle-div">
        {/* <div className="tagline">
          <h1>Run Projects Like a Pro with Deskly</h1>
        </div>
        <div className="btn">
          <button className="btn-box" onClick={handleGetStarted}>
            Get started
          </button>
        </div> */}
        <div className="hero-section">
          <h1>Run Projects Like a Pro with Deskly</h1>
          <p>
            Your all-in-one solution to manage, track, and complete projects
            faster and smarter.
          </p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get started
          </button>
        </div>
      </div>
    </>
  );
}
export default Middle;
