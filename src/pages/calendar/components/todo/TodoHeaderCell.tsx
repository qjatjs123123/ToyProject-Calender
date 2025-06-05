import type { Dayjs } from "dayjs";
import { convertWeekDaysKo } from "../../../../util/calendar";
import Text from "../../../../components/common/Text";
import Button from "../../../../components/common/Button";

interface Props {
  day: Dayjs;
}

const TodoHeaderCell = ({ day }: Props) => {
  const weekDay = day.format("dddd");
  const date = day.format("D");

  return (
    <div className="flex relative todo-cell no-br">
      <div className="separator" />
      <div className="todo-cell no-br flex flex-col items-center justify-center w-full h-full">
        <Text size="xs">{convertWeekDaysKo(weekDay)}</Text>
        <Button
          type="none"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center p-0"
        >
          <Text className="leading-none text-center" size="xxl" weight="bold">
            {date}
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default TodoHeaderCell;
