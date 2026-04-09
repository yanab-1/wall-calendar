import { useState, useEffect } from "react";

function NotesPanel({ startDate, endDate }) {
  const [note, setNote] = useState("");

  const noteKey = startDate && endDate
    ? `note-${startDate}-${endDate}`
    : startDate
    ? `note-${startDate}`
    : "note-general";

  useEffect(() => {
    const saved = localStorage.getItem(noteKey) || "";
    setNote(saved);
  }, [noteKey]);

  function handleChange(e) {
    setNote(e.target.value);
    localStorage.setItem(noteKey, e.target.value);
  }

  const label = startDate && endDate
    ? `Note for ${startDate} → ${endDate}`
    : startDate
    ? `Note for ${startDate}`
    : "General monthly note";

  return (
    <div className="notes-panel">
      <div className="notes-label">{label}</div>
      <textarea
        className="notes-textarea"
        value={note}
        onChange={handleChange}
        placeholder="Write a note for this date or range..."
        rows={5}
      />
    </div>
  );
}

export default NotesPanel;