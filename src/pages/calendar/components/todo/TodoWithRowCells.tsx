import dayjs, { Dayjs } from "dayjs";
import TodoHeader from "./TodoHeader";
import TodoHeaderCell from "./TodoHeaderCell";
import TodoTimeCell from "./TodoTimeCell";
import TodoContent from "./TodoContent";
import TodoCellSeparators from "./TodoCellSeperator";
import SeparatorBar from "./TodoSeperatorBar";
import TodoRowCell from "./TodoRowCell";

const TodoWithRowCells = () => {
  const start = dayjs("2025-06-01");
  const data = Array.from({ length: 1 }, (_, i) => start.add(i, "day"));

  return (
    <div className="overflow-hidden h-full">
      <TodoHeader className={`w-full h-[81px] flex`}>
        <TodoHeader.EmptyCell />
        <TodoHeader.HeaderCell>
          {data.map((day: Dayjs) => (
            <TodoHeaderCell key={day.format("YYYY-MM-DD")} day={day} />
          ))}
        </TodoHeader.HeaderCell>
      </TodoHeader>

      <TodoContent>
        <TodoContent.Side>
          <TodoTimeCell />
        </TodoContent.Side>

        <TodoContent.Main>
          <TodoCellSeparators />
          <SeparatorBar />

          {data.map(() => (
            <TodoRowCell />
          ))}
        </TodoContent.Main>
      </TodoContent>
    </div>
  );
};

export default TodoWithRowCells;
