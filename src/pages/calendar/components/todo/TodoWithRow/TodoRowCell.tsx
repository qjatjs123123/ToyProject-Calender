import type { Dayjs } from "dayjs";

const TodoRowCell = ({
  day,
  todos,
}: {
  day?: Dayjs;
  todos: [number, number][];
}) => {
  return (
    <div className="todo-cell" data-id={day?.format("YYYY-MM-DD")}>
      <div className="absolute inset-0 z-5"></div>
      <div className="relative w-full h-full">
        {todos?.map(([top, height]) => (
          <div
            style={{
              position: "absolute",
              top,
              left: "0",
              width: "100%",
              height,
              backgroundColor: "rgb(121, 134, 203)",
              pointerEvents: "none",
              zIndex: 9999,
              border: "1px solid white",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoRowCell;
