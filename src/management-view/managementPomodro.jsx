import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import "../management-view/management-css/managementPomodro.css";

function Pomodro() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
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
    <>
      <div className="pomodoro-wrapper">
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
    </>
  );
}

export default Pomodro;
