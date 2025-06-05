import { Dayjs } from "dayjs";
import TodoHeader from "./TodoHeader";
import TodoHeaderCell from "./TodoHeaderCell";
import TodoTimeCell from "./TodoTimeCell";
import TodoContent from "./TodoContent";
import TodoCellSeparators from "./TodoCellSeperator";
import SeparatorBar from "./TodoSeperatorBar";
import TodoRowCell from "./TodoRowCell";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../../store";
import { ModeStrategy } from "../../../../../util/strategy/mode/ModeStrategy";

const TodoWithRowCells = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const selectedDate = useSelector((state: RootState) => state.calendar.date);
  const data = ModeStrategy.create(mode, selectedDate).cellList();

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

          {data.map((day: Dayjs) => (
            <TodoRowCell key={day.format("YYYY-MM-DD")}/>
          ))}
        </TodoContent.Main>
      </TodoContent>
    </div>
  );
};

export default TodoWithRowCells;
