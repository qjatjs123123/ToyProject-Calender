import type { Dayjs } from "dayjs";
import TodoBox from "../common/TodoBox";
import type { TempTodoBox } from "../../../../../type/interface";
import { useTodoEvents } from "../providers/TodoProvider";

const TodoRowCell = ({ day, todos }: { day?: Dayjs; todos: TempTodoBox[] }) => {
  const { setShowDetailModal } = useTodoEvents();
  return (
    <div className="todo-cell" data-id={day?.format("YYYY-MM-DD")}>
      <div className="absolute inset-0 z-5"></div>
      <div className="relative w-full h-full">
        {todos?.map((todo, index) => {
          return (
            <TodoBox
              key={index}
              tempTodoBox={todo}
              setShowDetailModal={setShowDetailModal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoRowCell;
