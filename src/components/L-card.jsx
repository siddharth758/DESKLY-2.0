import { useNavigate } from "react-router-dom";
import "../css/L-card.css";

function Lpcard() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign");
  };
  const features = [
    "Tasks",
    "Chat",
    "AI",
    "Sprints",
    "Time Tracking",
    "Calendar",
    "Docs",
    "Goals",
    "Dashboards",
    "Whiteboards",
    "Forms",
    "Automations",
  ];

  return (
    <></>
    // <div className="card-stack">
    //   <div className="card card-1">
    //     <div className="feature-wrapper move-me">
    //       <div className="setup-container">
    //         <h2>Set up your Workspace</h2>
    //         <p>Customize your own space</p>
    //         <div className="grid">
    //           {features.map((feature, i) => (
    //             <div className="feature-box" key={i}>
    //               {/* Empty inside for now */}
    //             </div>
    //           ))}
    //         </div>
    //         <button onClick={handleGetStarted} className="start-button">
    //           Get started
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="floating-light"></div>
    //   <div className="card card-2">
    //     <div className="feature-wrapper move-me">
    //       <div className="setup-container">
    //         <h2>Set up your Workspace</h2>
    //         <p>Customize your own space</p>
    //         <div className="grid">
    //           {features.map((feature, i) => (
    //             <div className="feature-box" key={i}>
    //               {/* Empty inside for now */}
    //             </div>
    //           ))}
    //         </div>
    //         <button onClick={handleGetStarted} className="start-button">
    //           Get started
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="floating-light"></div>
    //   <div className="card card-3">
    //     <div className="feature-wrapper move-me">
    //       <div className="setup-container">
    //         <h2>Set up your Workspace</h2>
    //         <p>Customize your own space</p>
    //         <div className="grid">
    //           {features.map((feature, i) => (
    //             <div className="feature-box" key={i}>
    //               {/* Empty inside for now */}
    //             </div>
    //           ))}
    //         </div>
    //         <button onClick={handleGetStarted} className="start-button">
    //           Get started
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Lpcard;
