import { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import HeroImage from "./components/HeroImage";
import CalendarGrid from "./components/CalendarGrid";
import NotesPanel from "./components/NotesPanel";
import { useRangeSelection } from "./hooks/useRangeSelection";
import monthImages from "./data/monthImages";
import "./App.css";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function App() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const { startDate, endDate, hoverDate, setHoverDate, handleDayClick, getDayState, clearSelection } =
    useRangeSelection();

  function goToPrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  const heroData = monthImages[currentMonth];

  return (
    <div className="page-bg">
      <div className="calendar-card">
        {/* Top: spiral + navigation */}
        <CalendarHeader
          monthName={MONTH_NAMES[currentMonth]}
          year={currentYear}
          onPrev={goToPrevMonth}
          onNext={goToNextMonth}
        />

        {/* Hero photo */}
        <HeroImage imageUrl={heroData.url} label={heroData.label} />

        {/* Bottom section: grid + notes side by side on desktop */}
        <div className="calendar-body">
          <div className="grid-side">
            <CalendarGrid
              year={currentYear}
              month={currentMonth}
              getDayState={getDayState}
              onDayClick={handleDayClick}
              onDayHover={setHoverDate}
            />

            {/* Show selection summary + clear button */}
            {startDate && (
              <div className="selection-bar">
                <span>
                  {startDate}
                  {endDate ? ` → ${endDate}` : " (pick end date)"}
                </span>
                <button className="clear-btn" onClick={clearSelection}>
                  Clear
                </button>
              </div>
            )}
          </div>

          {/* Notes */}
          <NotesPanel startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  );
}

export default App;