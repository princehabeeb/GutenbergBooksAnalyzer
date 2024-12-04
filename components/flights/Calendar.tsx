"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar2 = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div className="box">
      <p className="mb-4 pb-4 xl:mb-6 xl:pb-6 bb-dashed">Calendar</p>
      <Calendar
        next2Label={false}
        prev2Label={false}
        onChange={setValue}
        value={value}
      />
    </div>
  );
};

export default Calendar2;
