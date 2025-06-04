import dayjs from "dayjs";

export const getDays = (selectedDate: string) => {
  const baseDate = dayjs(selectedDate);
  const startOfMonth = baseDate.startOf("month");
  const calendarStart = startOfMonth.startOf("week");
  const calendarEnd = calendarStart.add(41, "day");

  const days = [];
  let current = calendarStart;

  while (current.isBefore(calendarEnd) || current.isSame(calendarEnd, "day")) {
    days.push(current);
    current = current.add(1, "day");
  }

  return days;
};
