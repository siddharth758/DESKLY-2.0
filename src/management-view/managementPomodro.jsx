import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Palette,
  Music,
  Clock,
  Loader,
  Bell,
} from "lucide-react";
import { HexColorPicker } from "react-colorful"; // install this: npm install react-colorful
import "../management-view/management-css/managementPomodro.css";
// import VideoPlayer from "./management-section/pomodroVideo";
function Pomodro() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [color, setColor] = useState("#e5e5e5");
  const [showPicker, setShowPicker] = useState(false);
  const timeRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timeRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timeRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timeRef.current);
  }, [isRunning]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const toggleStartPause = () => setIsRunning((prev) => !prev);

  const resetTimer = () => {
    clearInterval(timeRef.current);
    setSecondsLeft(25 * 60);
    setIsRunning(false);
  };

  return (
    <div
      className={`pomodoro-wrapper ${isMaximized ? "maximized" : ""}`}
      style={{ backgroundColor: color }}
    >
      <button
        className="maximize-btn"
        onClick={() => setIsMaximized(!isMaximized)}
      >
        {isMaximized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>
      <div className="pomodro-middle-part">
        <div className="timer">{formatTime(secondsLeft)}</div>

        <div className="controls">
          <button className="btn" onClick={toggleStartPause}>
            {isRunning ? <Pause size={25} /> : <Play size={25} />}
          </button>
          <button className="btn" onClick={resetTimer}>
            <RotateCcw size={25} />
          </button>
        </div>
      </div>

      {isMaximized && (
        <div>
          <div className="extra-features">
            {/* Palette icon toggles color picker */}
            <div style={{ position: "relative" }}>
              <button
                className="btn"
                onClick={() => setShowPicker((prev) => !prev)}
              >
                <Palette size={28} />
              </button>

              {showPicker && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "60px", // 👈 change to move picker
                    left: "0px",
                    padding: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                    zIndex: 100,
                  }}
                >
                  <HexColorPicker onChange={setColor} />
                </div>
              )}
            </div>

            <Music size={28} />
            <Clock size={28} />
            <Loader size={28} />
            <Bell size={28} />
          </div>
          <div className="video-mp4">{/* <VideoPlayer /> */}</div>
        </div>
      )}
    </div>
  );
}

export default Pomodro;
