import holidays from "../data/holidays";

function DayCell({ dateStr, dayNumber, isCurrentMonth, isToday, isStart, isEnd, inRange, onClick, onMouseEnter }) {
  const holiday = holidays[dateStr];

  let cellClass = "day-cell";
  if (!isCurrentMonth) cellClass += " day-outside";
  if (isToday) cellClass += " day-today";
  if (isStart) cellClass += " day-start";
  if (isEnd) cellClass += " day-end";
  if (inRange) cellClass += " day-in-range";
  if (holiday) cellClass += " day-holiday";

  return (
    <div
      className={cellClass}
      onClick={isCurrentMonth ? onClick : undefined}
      onMouseEnter={isCurrentMonth ? onMouseEnter : undefined}
    >
      <span className="day-number">{dayNumber}</span>
      {holiday && <span className="holiday-dot" title={holiday} />}
    </div>
  );
}

export default DayCell;