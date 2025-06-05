import dayjs from "dayjs";

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

