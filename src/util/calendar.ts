import dayjs from "dayjs";

let todoBoxID = 0;

export function getTodoBoxID() {
  return ++todoBoxID;
}

export const getDays = (selectedDate: string, weeks: number = 6) => {
  const baseDate = dayjs(selectedDate);
  const startOfMonth = baseDate.startOf("month");
  const calendarStart = startOfMonth.startOf("week");
  const calendarEnd = calendarStart.add(weeks * 7 - 1, "day");

  const days = [];
  let current = calendarStart;

  while (current.isBefore(calendarEnd) || current.isSame(calendarEnd, "day")) {
    days.push(current.format("YYYY-MM-DD"));
    current = current.add(1, "day");
  }

  return days;
};

export const convertWeekDaysKo = (weekday: string) => {
  switch (weekday) {
    case "Sunday":
      return "일";
    case "Monday":
      return "월";
    case "Tuesday":
      return "화";
    case "Wednesday":
      return "수";
    case "Thursday":
      return "목";
    case "Friday":
      return "금";
    default:
      return "토";
  }
};

export function pxToTimeWithAMPM(px: number): { ampm: string; time: string } {
  const totalQuarters = Math.floor(px / 12);
  const totalMinutes = totalQuarters * 15;

  let hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const ampm = hours < 12 ? "오전" : "오후";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const hh = hours.toString().padStart(2, "0");
  const mm = minutes.toString().padStart(2, "0");

  return { ampm, time: `${hh}:${mm}` };
}

export function formatTimeRange(pxStart: number, pxEnd: number): string {
  const start = pxToTimeWithAMPM(pxStart);
  const end = pxToTimeWithAMPM(pxEnd);

  if (start.ampm === end.ampm) {
    return `${start.ampm} ${start.time}~${end.time}`;
  } else {
    return `${start.ampm} ${start.time}~${end.ampm} ${end.time}`;
  }
}
