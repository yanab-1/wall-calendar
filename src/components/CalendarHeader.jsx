function CalendarHeader({ monthName, year, onPrev, onNext }) {
  return (
    <div className="cal-header">
      {}
      <div className="spiral-row">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="spiral-dot" />
        ))}
      </div>

      {}
      <div className="month-nav">
        <button className="nav-btn" onClick={onPrev}>&#8592;</button>
        <div className="month-title">
          <span className="month-year">{year}</span>
          <span className="month-name">{monthName.toUpperCase()}</span>
        </div>
        <button className="nav-btn" onClick={onNext}>&#8594;</button>
      </div>
    </div>
  );
}

export default CalendarHeader;