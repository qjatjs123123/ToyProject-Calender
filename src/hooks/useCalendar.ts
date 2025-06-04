import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import dayjs, { Dayjs } from "dayjs";
import { useCallback } from "react";

export const useCalendar = () => {
  const selectedDate = useSelector((state: RootState) => state.calendar.date);
  const now = useSelector((state: RootState) => state.calendar.now);
  const mode = useSelector((state: RootState) => state.mode.mode);
  const dispatch = useDispatch();

  const setDate = useCallback(
    (date: string) => {
      dispatch({ type: "calendar/setDate", payload: date });
    },
    [dispatch]
  );

  const getNextDate = useCallback(
    (nextDate: Dayjs) => {
      if (mode === "month") {
        return nextDate.add(1, mode).startOf("month");
      }
      return nextDate.add(1, mode);
    },
    [mode]
  );

  const goPrevDateByMode = useCallback(() => {
    let nextDate = dayjs(selectedDate);

    nextDate = getNextDate(nextDate);
    setDate(nextDate.format("YYYY-MM-DD"));
  }, [selectedDate, getNextDate, setDate]);

  const goNextDateByMode = useCallback(() => {
    let nextDate = dayjs(selectedDate);
    nextDate = getNextDate(nextDate);

    setDate(nextDate.format("YYYY-MM-DD"));
  }, [selectedDate, setDate, getNextDate]);

  const resetToday = useCallback(() => {
    setDate(now);
  }, [now, setDate]);

  return {
    goPrevDateByMode,
    goNextDateByMode,
    resetToday,
  };
};
