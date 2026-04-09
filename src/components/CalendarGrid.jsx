import DayCell from "./DayCell";

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function CalendarGrid({ year, month, getDayState, onDayClick, onDayHover }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let startWeekday = new Date(year, month, 1).getDay();
  startWeekday = startWeekday === 0 ? 6 : startWeekday - 1; 

  const prevMonthDays = new Date(year, month, 0).getDate();

  const todayStr = new Date().toISOString().slice(0, 10);

  const cells = [];

  for (let i = startWeekday - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const dateStr = `${prevYear}-${String(prevMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ dayNumber: d, dateStr, isCurrentMonth: false });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ dayNumber: d, dateStr, isCurrentMonth: true });
  }

  let nextDay = 1;
  while (cells.length % 7 !== 0) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const dateStr = `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(nextDay).padStart(2, "0")}`;
    cells.push({ dayNumber: nextDay, dateStr, isCurrentMonth: false });
    nextDay++;
  }

  return (
    <div className="calendar-grid">
      {}
      {DAY_LABELS.map((label) => (
        <div key={label} className="day-label">{label}</div>
      ))}

      {}
      {cells.map(({ dayNumber, dateStr, isCurrentMonth }) => {
        const { isStart, isEnd, inRange } = getDayState(dateStr);
        return (
          <DayCell
            key={dateStr}
            dateStr={dateStr}
            dayNumber={dayNumber}
            isCurrentMonth={isCurrentMonth}
            isToday={dateStr === todayStr}
            isStart={isStart}
            isEnd={isEnd}
            inRange={inRange}
            onClick={() => onDayClick(dateStr)}
            onMouseEnter={() => onDayHover(dateStr)}
          />
        );
      })}
    </div>
  );
}

export default CalendarGrid;