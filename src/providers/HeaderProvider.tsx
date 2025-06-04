import { createContext, useContext, type ReactNode } from "react";
import { useCalendar } from "../hooks/useCalendar";

type HeaderContextType = ReturnType<typeof useCalendar>;

const HeaderContext = createContext<HeaderContextType | null>(null);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const calendar = useCalendar();
  return (
    <HeaderContext.Provider value={calendar}>{children}</HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const ctx = useContext(HeaderContext);
  if (!ctx)
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  return ctx;
};
