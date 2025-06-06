import type { Dayjs } from "dayjs";
import TodoBox from "../common/TodoBox";

const TodoRowCell = ({
  day,
  todos,
}: {
  day?: Dayjs;
  todos: [number, number, string, string, number][];
}) => {
  return (
    <div className="todo-cell" data-id={day?.format("YYYY-MM-DD")}>
      <div className="absolute inset-0 z-5"></div>
      <div className="relative w-full h-full">
        {todos?.map(([top, height, date, title, id], index) => {
          const boxProps = { top, height, date, title, id };
          return <TodoBox key={index} {...boxProps} />;
        })}
      </div>
    </div>
  );
};

export default TodoRowCell;
