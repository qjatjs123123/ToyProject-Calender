import dayjs from "dayjs";

export const getDays = (selectedDate: string) => {
  const baseDate = dayjs(selectedDate);
  const startOfMonth = baseDate.startOf("month");
  const calendarStart = startOfMonth.startOf("week");
  const calendarEnd = calendarStart.add(41, "day");

  const days = [];
  let current = calendarStart;

  while (current.isBefore(calendarEnd) || current.isSame(calendarEnd, "day")) {
    days.push(current.format("YYYY-MM-DD"));
    current = current.add(1, "day");
  }

  return days;
};

export const getMonthsInWeek = (dateStr: string): string[] => {
  const targetDate = dayjs(dateStr);
  const startOfWeek = targetDate.startOf("week"); 
  const daysInWeek = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day").format("YYYY-MM")
  );
  const uniqueMonths = [...new Set(daysInWeek)];
  return uniqueMonths;
};
