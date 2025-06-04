import React from "react";

type CalendarLayoutProps = {
  header?: React.ReactNode;
  weekDays?: React.ReactNode;
  children?: React.ReactNode; // 달력 날짜 영역 등
};

const CalendarLayout: React.FC<CalendarLayoutProps> = () => {
  return (
    <div className="shadow-md p-4 bg-white flex-1 rounded-[20px] mb-[16px]"></div>
  );
};

export default CalendarLayout;
