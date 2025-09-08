import "./calendar-css/calendar-main.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CalendarMain() {
  // You can use these in the next steps
  // const today = new Date();

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

  const handlePrev = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNext = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const startDay = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push("");
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day); // actual dates
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
          // Check if this day is today
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={index}
              data-day={day !== "" ? day : undefined}
              className={`day ${isToday ? "today" : ""}`}
            ></div>
          );
        })}

        {/* We will generate empty boxes and real dates here later using logic */}
      </div>
    </div>
  );
}

export default CalendarMain;
