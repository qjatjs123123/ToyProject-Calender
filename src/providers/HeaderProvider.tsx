import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { useDispatch, useSelector } from "react-redux";
import type { ManipulateType } from "dayjs";
import { setMode } from "../store/mode";
import type { RootState } from "../store";
import { HEADER_DROPDOWN_OPTION } from "../util/constants";
import { ModeStrategy } from "../util/strategy/mode/ModeStrategy";

type HeaderContextType = ReturnType<typeof useCalendar> & {
  onClick: (mode: ManipulateType) => void;
  getLabelByMode : () => string;
  title: string;
};

const HeaderContext = createContext<HeaderContextType | null>(null);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const selectedDate = useSelector((state: RootState) => state.calendar.date);
  const title = ModeStrategy.create(mode, selectedDate).title();
  const calendar = useCalendar();
  const dispatch = useDispatch();

  const setModeCallback = useCallback(
    (mode: ManipulateType) => {
      dispatch(setMode(mode));
    },
    [dispatch]
  );

  const onClick = (mode: ManipulateType) => {
    setModeCallback(mode);
  };

  const getLabelByMode = () => {
    const found = HEADER_DROPDOWN_OPTION.find(([, m]) => m === mode);
    return found ? found[0] : "";
  }

  return (
    <HeaderContext.Provider value={{ ...calendar, onClick, getLabelByMode, title }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const ctx = useContext(HeaderContext);
  if (!ctx) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  }
  return ctx;
};
