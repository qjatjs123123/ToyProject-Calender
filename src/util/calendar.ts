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
