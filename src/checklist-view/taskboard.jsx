import React, { useState, useEffect, useRef } from "react";
import { CircleDot, Activity, UserRound, CalendarDays } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SingleChecklistBoard() {
  const boardRef = useRef(null);

  const [task, setTask] = useState({
    heading: "Task Name",
    priority: "Low",
    status: "To-do",
    statusColor: "blue",
    isEditing: false,
    showPopup: false,
  });

  const statusOptions = [
    { label: "Task", color: "black" },
    { label: "In Progress", color: "blue" },
    { label: "Completed", color: "green" },
  ];

  const getTaskCardColor = (priority) => {
    switch (priority) {
      case "Low":
        return "#ADD8E6";
      case "Normal":
        return "#90EE90";
      case "Urgent":
        return "#FF7F7F";
      default:
        return "#ADD8E6";
    }
  };

  const getBorderColor = (priority) => {
    switch (priority) {
      case "Low":
        return "blue";
      case "Normal":
        return "green";
      case "Urgent":
        return "red";
      default:
        return "blue";
    }
  };

  const getColor = (priority) => {
    switch (priority) {
      case "Low":
        return "blue";
      case "Normal":
        return "green";
      case "Urgent":
        return "red";
      default:
        return "blue";
    }
  };

  useEffect(() => {
    const elem = boardRef.current;

    // Clear any inline transform from previous reload
    gsap.set(elem, { clearProps: "transform" });

    // Now apply scale safely
    gsap.set(elem, { scale: 0.75, transformOrigin: "top left" });

    gsap.set(elem, {
      x: 60, // acts like "left"
      y: 0, // acts like "top"
    });

    gsap.to(elem, {
      x: 750,
      y: 625,
      scale: 0.65,
      ease: "none",
      scrollTrigger: {
        trigger: ".trigger-placeholder",
        start: "top top", // when animation starts
        end: "+=500", // length of scroll for animation
        scrub: true,
        pin: true, // ✅ GSAP will handle "fixed" positioning
        pinSpacing: false, // removes extra space GSAP normally adds
      },
    });
  }, []);

  return (
    <div ref={boardRef} className="task-wrapper">
      <div
        className="todo-box"
        style={{ borderColor: getBorderColor(task.priority) }}
      >
        <div className="todo-header">
          <div
            className="todo-header-left"
            onClick={() => setTask({ ...task, showPopup: true })}
          >
            <CircleDot size={20} color={task.statusColor} /> {task.status}
          </div>
        </div>

        <div
          className="task-card"
          style={{ backgroundColor: getTaskCardColor(task.priority) }}
        >
          {task.isEditing ? (
            <input
              type="text"
              value={task.heading}
              onChange={(e) => setTask({ ...task, heading: e.target.value })}
              onBlur={() => setTask({ ...task, isEditing: false })}
              onKeyDown={(e) =>
                e.key === "Enter" && setTask({ ...task, isEditing: false })
              }
              autoFocus
              style={{
                padding: "4px",
                marginBottom: "5px",
                backgroundColor: "white",
                color: "black",
                border: "1px solid #555",
                borderRadius: "4px",
                width: "85%",
                fontSize: "13px",
              }}
            />
          ) : (
            <h3
              className="task-title"
              style={{ fontSize: "15px", marginBottom: "8px" }}
              onClick={() => setTask({ ...task, isEditing: true })}
            >
              {task.heading}
            </h3>
          )}

          <div className="task-icons" style={{ gap: "7px" }}>
            <UserRound size={13} />
            <CalendarDays size={13} />
            <div
              className="task-priority"
              style={{ fontSize: "10px", padding: "4px 3px" }}
            >
              <Activity size={15} color={getColor(task.priority)} />
              <select
                value={task.priority}
                onChange={(e) => setTask({ ...task, priority: e.target.value })}
                className="priority-select"
                style={{ fontSize: "11px", padding: "0px 5px" }}
              >
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {task.showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-box-heading">
              {statusOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="popup-header-left"
                  onClick={() =>
                    setTask({
                      ...task,
                      status: option.label,
                      statusColor: option.color,
                      showPopup: false,
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  <CircleDot size={15} color={option.color} />
                  <span className="popup-status" style={{ fontSize: "12px" }}>
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleChecklistBoard;
