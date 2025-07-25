import React from "react";
import { useState } from "react";
import "../checklist-view/checklist-css/checkListView.css";

import {
  // ClipboardList,
  ListTodo,
  // Flag,
  Activity,
  Pencil,
  // Check,
  // Plus,
  // MoreHorizontal,
  CircleDashed,
  UserRound,
  CalendarDays,
  Flag,
  MoreHorizontal,
  Plus,
  CircleDot,
} from "lucide-react";

function ChecklistBoards() {
  const [tasks, setTasks] = useState([
    {
      heading: "Task Name",
      priority: "Low",
      status: "To-do",
      statusColor: "black",
      isEditing: false,
      showPopup: false,
    },
  ]);

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

  const statusOptions = [
    { label: "Task", color: "black" },
    { label: "In Progress", color: "blue" },
    { label: "Completed", color: "green" },
  ];

  return (
    <>
      <div className="add-task-bar">
        <button
          className="add-task-btn"
          onClick={() =>
            setTasks([
              ...tasks,
              {
                heading: "New Task",
                priority: "Low",
                status: "To-do",
                statusColor: "black",
                isEditing: false,
                showPopup: false,
              },
            ])
          }
        >
          + Add Task
        </button>
      </div>
      <div className="task-grid">
        {tasks.map((task, index) => (
          <div className="task-wrapper" key={index}>
            <div
              key={index}
              className="todo-box"
              style={{ borderColor: getBorderColor(task.priority) }}
            >
              <div className="todo-header">
                <div
                  className="todo-header-left"
                  onClick={() => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].showPopup = true;
                    setTasks(updatedTasks);
                  }}
                >
                  <CircleDot size={20} color={task.statusColor} /> {task.status}
                </div>
                <div className="todo-header-right">
                  <Pencil
                    size={16}
                    onClick={() => {
                      const updatedTasks = [...tasks];
                      updatedTasks[index].isEditing = true;
                      setTasks(updatedTasks);
                    }}
                  />
                  <Plus size={16} />
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
                    onChange={(e) => {
                      const updatedTasks = [...tasks];
                      updatedTasks[index].heading = e.target.value;
                      setTasks(updatedTasks);
                    }}
                    onBlur={() => {
                      const updatedTasks = [...tasks];
                      updatedTasks[index].isEditing = false;
                      setTasks(updatedTasks);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const updatedTasks = [...tasks];
                        updatedTasks[index].isEditing = false;
                        setTasks(updatedTasks);
                      }
                    }}
                    autoFocus
                    style={{
                      padding: "6px",
                      marginBottom: "5px",
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid #555",
                      borderRadius: "4px",
                      width: "90%",
                    }}
                  />
                ) : (
                  <h3 className="task-title">{task.heading}</h3>
                )}

                <div className="task-icons">
                  <UserRound size={16} />
                  <CalendarDays size={16} />
                  <div className="task-priority">
                    <Activity size={18} color={getColor(task.priority)} />

                    <select
                      value={task.priority}
                      onChange={(e) => {
                        const updatedTasks = [...tasks];
                        updatedTasks[index].priority = e.target.value;
                        setTasks(updatedTasks);
                      }}
                      className="priority-select"
                    >
                      <option value="Low">Low</option>
                      <option value="Normal">Normal</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {task.showPopup && (
                <div className="popup-overlay">
                  <div className="popup-box">
                    <div className="popup-header-left">
                      <div className="popup-box-heading">
                        {statusOptions.map((option, idx) => (
                          <div
                            key={idx}
                            className="popup-header-left"
                            onClick={() => {
                              const updatedTasks = [...tasks];
                              updatedTasks[index].status = option.label;
                              updatedTasks[index].statusColor = option.color;
                              updatedTasks[index].showPopup = false;
                              setTasks(updatedTasks);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <CircleDot size={20} color={option.color} />
                            <span className="popup-status">{option.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChecklistBoards;
