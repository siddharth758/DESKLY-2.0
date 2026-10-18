import React from "react";
import "../checklist-view/checklist-css/checkListView.css";
import {
  Activity,
  Pencil,
  Plus,
  CircleDot,
  UserRound,
  CalendarDays,
  Trash2,
} from "lucide-react";
import { useTask } from "../TaskContext";

function ChecklistBoards() {
  const { state, dispatch } = useTask();
  const tasks = state.tasks;

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

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    dispatch({ type: "SET_TASKS", payload: updatedTasks });
  };

  const handleAddTask = () => {
    dispatch({
      type: "SET_TASKS",
      payload: [
        ...tasks,
        {
          heading: "New Task",
          priority: "Low",
          status: "Task",
          statusColor: "black",
          isEditing: false,
          showPopup: false,
        },
      ],
    });
  };

  return (
    <>
      <div className="add-task-bar">
        <button className="add-task-btn" onClick={handleAddTask}>
          + Add Task
        </button>
      </div>

      <div className="task-grid">
        {tasks.map((task, index) => (
          <div className="task-wrapper" key={index}>
            <div
              className="todo-box"
              style={{ borderColor: getBorderColor(task.priority) }}
            >
              <div className="todo-header">
                <div
                  className="todo-header-left"
                  onClick={() => {
                    const updatedTasks = JSON.parse(JSON.stringify(tasks));
                    updatedTasks[index].showPopup = true;
                    dispatch({ type: "SET_TASKS", payload: updatedTasks });
                  }}
                >
                  <CircleDot size={20} color={task.statusColor} /> {task.status}
                </div>

                <div className="todo-header-right">
                  <Pencil
                    size={16}
                    onClick={() => {
                      const updated = [...tasks];
                      updated[index].isEditing = true;
                      dispatch({ type: "SET_TASKS", payload: updated });
                    }}
                    style={{ cursor: "pointer", marginRight: "8px" }}
                  />
                  <Plus
                    size={16}
                    onClick={handleAddTask}
                    style={{ cursor: "pointer", marginRight: "8px" }}
                  />
                  <Trash2
                    size={16}
                    color="black"
                    onClick={() => handleDeleteTask(index)}
                    style={{ cursor: "pointer" }}
                  />
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
                      const updated = [...tasks];
                      updated[index].heading = e.target.value;
                      dispatch({ type: "SET_TASKS", payload: updated });
                    }}
                    onBlur={() => {
                      const updated = [...tasks];
                      updated[index].isEditing = false;
                      dispatch({ type: "SET_TASKS", payload: updated });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const updated = [...tasks];
                        updated[index].isEditing = false;
                        dispatch({ type: "SET_TASKS", payload: updated });
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
                        const updated = [...tasks];
                        updated[index].priority = e.target.value;
                        dispatch({ type: "SET_TASKS", payload: updated });
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
                            const updated = [...tasks];
                            updated[index].status = option.label;
                            updated[index].statusColor = option.color;
                            updated[index].showPopup = false;
                            dispatch({ type: "SET_TASKS", payload: updated });
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
        ))}
      </div>
    </>
  );
}

export default ChecklistBoards;
