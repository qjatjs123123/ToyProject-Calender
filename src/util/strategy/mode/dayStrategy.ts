import dayjs, { Dayjs } from "dayjs";
import type { IModeStrategy } from "../../../type/interface";

export class DayStrategy implements IModeStrategy {
  private selectedDate : string

  constructor(selectedDate: string) {
    this.selectedDate = selectedDate;
  }

  title(): string {
    return dayjs(this.selectedDate).format("YYYY년 M월 D일")
  }
  cellList(): Dayjs[] {
    return [dayjs(this.selectedDate)]
  }
  
}