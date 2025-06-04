import dayjs from "dayjs";
import type { FC, ReactNode } from "react";
import type { childrenProps } from "../../type/interface";
import { useDatePicker } from "../../providers/DatePickerProvider";
import Text from "../common/Text";
import Button from "../common/Button";

interface DatePickerTitleProps {
  left?: ReactNode;
  right?: ReactNode;
}

interface DatePickerComponent extends FC<childrenProps> {
  Title: FC<DatePickerTitleProps>;
  Content: FC;
  ContentHeader: FC;
}

const Title: FC<DatePickerTitleProps> = () => {
  const { left, right } = useDatePicker();

  return (
    <div className="grid gap-2 grid-cols-7 items-center mb-4">
      <div className="col-span-5 pl-2">{left}</div>
      <div className="col-span-2 flex justify-end">{right}</div>
    </div>
  );
};

const ContentHeader: FC = () => {
  const { weekDays } = useDatePicker();

  return (
    <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
      {weekDays.map((dayName, idx) => (
        <div key={idx} className="text-gray-600">
          <Text size="xs">{dayName}</Text>
        </div>
      ))}
    </div>
  );
};

const Content: FC = () => {
  const { selectedDate, days, setDate, now } = useDatePicker();

  return (
    <div className="grid grid-cols-7 gap-2 place-items-center">
      {days.map((day, idx) => {
        const isToday = day === now;
        const isSelected = day === selectedDate;
        const isCurrentMonth = dayjs(day).month() === dayjs(selectedDate).month();

        const type = isToday
          ? "primary"
          : isSelected
          ? "light"
          : "none";
        const textColor = isToday
          ? "white"
          : isCurrentMonth
          ? "black"
          : "gray";

        return (
          <Button
            key={idx}
            onClick={() => setDate(day)}
            type={type}
            className={`text-center rounded-full w-[24px] h-[24px] flex items-center justify-center text-sm`}
          >
            <Text
              size="xs"
              color={textColor}
              weight={isToday ? "bold" : "normal"}
            >
              {dayjs(day).format("D")}
            </Text>
          </Button>
        );
      })}
    </div>
  );
};

const DatePickerRoot: FC<childrenProps> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto mt-4 p-4 rounded-xl">
      {children}
    </div>
  );
};

const DatePicker = Object.assign(DatePickerRoot, {
  Title,
  Content,
  ContentHeader,
}) as DatePickerComponent;

export default DatePicker;
