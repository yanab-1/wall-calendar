import { useState } from "react";


export function useRangeSelection() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  function handleDayClick(date) {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      return;
    }
    if (date < startDate) {
      setEndDate(startDate);
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  }
  function getDayState(dateStr) {
    const previewEnd = endDate || hoverDate;

    const isStart = startDate === dateStr;
    const isEnd = endDate === dateStr;
    const inRange =
      startDate &&
      previewEnd &&
      dateStr > Math.min(startDate, previewEnd) &&
      dateStr < Math.max(startDate, previewEnd);
    const isPreview =
      startDate &&
      !endDate &&
      hoverDate &&
      dateStr >= Math.min(startDate, hoverDate) &&
      dateStr <= Math.max(startDate, hoverDate);

    return { isStart, isEnd, inRange: inRange || isPreview };
  }

  function clearSelection() {
    setStartDate(null);
    setEndDate(null);
    setHoverDate(null);
  }

  return {
    startDate,
    endDate,
    hoverDate,
    setHoverDate,
    handleDayClick,
    getDayState,
    clearSelection,
  };
}