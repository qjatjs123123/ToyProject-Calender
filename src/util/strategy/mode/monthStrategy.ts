import dayjs, { Dayjs } from "dayjs";
import type { IModeStrategy } from "../../../type/interface";
import { getDays } from "../../calendar";

export class MonthStrategy implements IModeStrategy {
  private selectedDate: string;

  constructor(selectedDate: string) {
    this.selectedDate = selectedDate;
  }

  title(): string {
    return dayjs(this.selectedDate).format("YYYY년 M월");
  }
  cellList(): Dayjs[] {
    return getDays(this.selectedDate, 7).map((date: string) => dayjs(date));
  }
}
