import type { Dayjs } from "dayjs";
import { convertWeekDaysKo } from "../../../../../util/calendar";
import Text from "../../../../../components/common/Text";
import Button from "../../../../../components/common/Button";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../../store";

interface Props {
  day: Dayjs;
}

const TodoHeaderCell = ({ day }: Props) => {
  const now = useSelector((state: RootState) => state.calendar.now);
  const isToday = day.isSame(now);
  const weekDay = day.format("dddd");
  const date = day.format("D");

  return (
    <div className="flex relative todo-cell no-br">
      <div className="separator" />
      <div className="todo-cell no-br flex flex-col items-center justify-center w-full h-full">
        <Text size="xs">{convertWeekDaysKo(weekDay)}</Text>
        <Button
          type={isToday ? "primary" : "none"}
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center p-0"
        >
          <Text  color={isToday ? "white" : "black"} className="leading-none text-center" size="xxl" weight="bold">
            {date}
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default TodoHeaderCell;
