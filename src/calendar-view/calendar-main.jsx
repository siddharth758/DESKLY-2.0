import "./calendar-css/calendar-main.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

function CalendarMain() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  function goToPreviousMonth() {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }

  function goToNextMonth() {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }

  const startDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push("");
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({});
  const [openInputs, setOpenInputs] = useState({});

  function toggleAddTaskMode() {
    setIsAddingTask((prev) => !prev);
  }

  function toggleInputForDay(dateKey) {
    setOpenInputs((prev) => ({
      ...prev,
      [dateKey]: !prev[dateKey], // toggle input visibility for this day
    }));
  }

  return (
    <div className="calendar-container" onClick={(e) => e.stopPropagation()}>
      <div className="headings">
        <div className="headings-left">
          <button onClick={goToPreviousMonth}>
            <ChevronLeft size={14} />
          </button>
          <h3 className="month-select">{monthName}</h3>
          <button onClick={goToNextMonth}>
            <ChevronRight size={14} />
          </button>
          <button onClick={toggleAddTaskMode}>
            {isAddingTask ? "Cancel" : "Add Task"}
          </button>
        </div>
        <h3 className="current-month">
          {monthName} {year}
        </h3>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}

        {calendarDays.map((day, index) => {
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const dateKey = `${year}-${month}-${day}`;
          const isInputOpen = openInputs[dateKey];

          return (
            <div
              key={index}
              data-day={day !== "" ? day : undefined}
              className={`day ${isToday ? "today" : ""}${
                isInputOpen ? "active-day" : ""
              }`}
            >
              {day !== "" && (
                <>
                  {isAddingTask && (
                    <span
                      className="add-task-icon"
                      onClick={() => toggleInputForDay(dateKey)}
                    >
                      {openInputs[dateKey] ? (
                        <X color="red" size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </span>
                  )}

                  {openInputs[dateKey] && (
                    <input
                      type="text"
                      autoFocus
                      className="task-input"
                      placeholder=""
                    />
                  )}

                  <div className="task-list">
                    {tasks[dateKey]?.map((t, i) => (
                      <div key={i} className="task-item">
                        {t}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarMain;
