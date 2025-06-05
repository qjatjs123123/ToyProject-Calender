import type { ManipulateType } from "dayjs";
import { DayStrategy } from "./dayStrategy";
import { WeekStrategy } from "./weekStrategy";
import { MonthStrategy } from "./monthStrategy";

export class ModeStrategy {

  static create(mode: ManipulateType, selectedDate : string) {
    const m = String(mode);

    switch(m) {
      case "day":
        return new DayStrategy(selectedDate)
      case "week" :
        return new WeekStrategy(selectedDate);
      default:
        return new MonthStrategy(selectedDate); 
    }
  }
}