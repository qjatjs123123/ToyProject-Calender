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

interface ContentDataProps {
  day: string;
}

interface HeaderDataProps {
  dayName: string;
}

interface DatePickerContentComponent extends FC<childrenProps> {
  Data: FC<ContentDataProps>;
}

interface DatePickerHeaderComponent extends FC<childrenProps> {
  Data: FC<HeaderDataProps>;
}

interface DatePickerComponent extends FC<childrenProps> {
  Title: FC<DatePickerTitleProps>;
  Content: DatePickerContentComponent;
  ContentHeader: DatePickerHeaderComponent;
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

const ContentData: FC<ContentDataProps> = ({ day }) => {
  const { selectedDate, setDate, now } = useDatePicker();

  const isToday = day === now;
  const isSelected = day === selectedDate;
  const isCurrentMonth = dayjs(day).month() === dayjs(selectedDate).month();

  const type = isToday ? "primary" : isSelected ? "light" : "none";
  const textColor = isToday ? "white" : isCurrentMonth ? "black" : "gray";

  return (
    <Button
      onClick={() => setDate(day)}
      type={type}
      className="text-center rounded-full w-[24px] h-[24px] flex items-center justify-center text-sm"
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
};

const ContentRoot: FC<childrenProps> = ({ children }) => {
  const { days } = useDatePicker();

  return (
    <div className="grid grid-cols-7 gap-2 place-items-center">
      {children || days.map((day, idx) => <DatePicker.Content.Data key={idx} day={day} />)}
    </div>
  );
};

const Content = Object.assign(ContentRoot, {
  Data: ContentData,
}) as DatePickerContentComponent;

const ContentHeaderData: FC<HeaderDataProps> = ({ dayName }) => {
  return (
    <div className="text-gray-600 text-center">
      <Text size="xs">{dayName}</Text>
    </div>
  );
};

const ContentHeaderRoot: FC<childrenProps> = ({ children }) => {
  const { weekDays } = useDatePicker();

  return (
    <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
      {children || weekDays.map((dayName, idx) => (
        <DatePicker.ContentHeader.Data key={idx} dayName={dayName} />
      ))}
    </div>
  );
};

const ContentHeader = Object.assign(ContentHeaderRoot, {
  Data: ContentHeaderData,
}) as DatePickerHeaderComponent;

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
