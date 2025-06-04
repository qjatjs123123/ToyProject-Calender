import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { getDays } from "../util/calendar";
import dayjs from "dayjs";
import Button from "../components/common/Button";
import ChevronLeftIcon from "../components/common/ChevronLeftIcon";
import { ChevronRightIcon } from "../components/common/ChevronRightIcon";
import Text from "../components/common/Text";

interface DatePickerContextType {
  selectedDate: string;
  days: ReturnType<typeof getDays>;
  setDate: (date: string) => void;
  left: ReactNode;
  right: ReactNode;
  weekDays: string[];
  now: string;
  datepickerDate: string
}

const DatePickerContext = createContext<DatePickerContextType | undefined>(
  undefined
);

export const DatePickerProvider = ({ children }: { children: ReactNode }) => {
  const selectedDate = useSelector((state: RootState) => state.calendar.date);
  const now = useSelector((state: RootState) => state.calendar.now);
  const [datepickerDate, setDatePickerDate] = useState<string>(now);
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const days = getDays(datepickerDate);
  const dispatch = useDispatch();

  const goPrevMonth = () => {
    const prevMonth = dayjs(datepickerDate)
      .subtract(1, "month")
      .format("YYYY-MM-DD");
    setDatePickerDate(prevMonth);
  };

  const goNextMonth = () => {
    const nextMonth = dayjs(datepickerDate)
      .add(1, "month")
      .format("YYYY-MM-DD");
    setDatePickerDate(nextMonth);
  };

  const left = (
    <Text size="sm" weight="bold">
      {dayjs(datepickerDate).format("YYYY년 M월")}
    </Text>
  );
  const right = (
    <div className="flex gap-2">
      <Button style={"flat"} onClick={goPrevMonth}>
        <ChevronLeftIcon />
      </Button>
      <Button style={"flat"} onClick={goNextMonth}>
        <ChevronRightIcon />
      </Button>
    </div>
  );

  const setDate = (date: string) => {
    dispatch({ type: "calendar/setDate", payload: date });
  };

  return (
    <DatePickerContext.Provider
      value={{ selectedDate, days, setDate, left, right, weekDays, now, datepickerDate }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => {
  const context = useContext(DatePickerContext);
  if (!context)
    throw new Error("useDatePicker must be used within a DatePickerProvider");
  return context;
};
