import dayjs from "dayjs";
import type { FC, ReactNode } from "react";
import { useDatePicker } from "../../providers/DatePickerProvider";
import Text from "../common/Text";
import Button from "../common/Button";

interface childrenProps {
  children?: ReactNode;
}

interface DatePickerTitleProps {
  left?: ReactNode;
  right?: ReactNode;
}

interface ContentDataProps {
  day: string;
}

interface ContentHeaderDataProps {
  dayName: string;
}

// Content 컴포넌트에 Data 프로퍼티 추가할 타입 정의
interface ContentComponent extends FC<childrenProps> {
  Data: FC<ContentDataProps>;
}

// ContentHeader 컴포넌트에 Data 프로퍼티 추가할 타입 정의
interface ContentHeaderComponent extends FC<childrenProps> {
  Data: FC<ContentHeaderDataProps>;
}

interface DatePickerComponent extends FC<childrenProps> {
  Title: FC<DatePickerTitleProps>;
  Content: ContentComponent;
  ContentHeader: ContentHeaderComponent;
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

const Content: ContentComponent = ({ children }) => {
  const { days } = useDatePicker();

  return (
    <div className="grid grid-cols-7 gap-2 place-items-center">
      {children || days.map((day, idx) => <Content.Data key={idx} day={day} />)}
    </div>
  );
};

Content.Data = ContentData;

const ContentHeaderData: FC<ContentHeaderDataProps> = ({ dayName }) => {
  return (
    <div className="text-gray-600 text-center">
      <Text size="xs">{dayName}</Text>
    </div>
  );
};

const ContentHeader: ContentHeaderComponent = ({ children }) => {
  const { weekDays } = useDatePicker();

  return (
    <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
      {children || weekDays.map((dayName, idx) => (
        <ContentHeader.Data key={idx} dayName={dayName} />
      ))}
    </div>
  );
};

ContentHeader.Data = ContentHeaderData;

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
