import dayjs, { Dayjs } from "dayjs";
import type { IModeStrategy } from "../../../type/interface";

export class WeekStrategy implements IModeStrategy {
  private selectedDate: string;

  constructor(selectedDate: string) {
    this.selectedDate = selectedDate;
  }

  title(): string {
    const targetDate = dayjs(this.selectedDate);
    const startOfWeek = targetDate.startOf("week");
    const daysInWeek = Array.from({ length: 7 }, (_, i) =>
      startOfWeek.add(i, "day").format("YYYY-MM")
    );
    const uniqueMonths = [...new Set(daysInWeek)];
    const [start, end] = uniqueMonths.map((date) => dayjs(date));

    if (uniqueMonths.length === 2)
      return `${start.format("YYYY년 M월")} - ${end.format("M월")}`;
    return start.format("YYYY년 M월");
  }
  cellList(): Dayjs[] {
    const targetDate = dayjs(this.selectedDate);
    const startOfWeek = targetDate.startOf("week");
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
  }
}
