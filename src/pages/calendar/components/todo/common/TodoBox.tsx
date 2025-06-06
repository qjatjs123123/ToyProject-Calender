import type { TempTodoBox } from "../../../../../type/interface";


const TodoBox: React.FC<TempTodoBox> = ({ top, left, width, height }) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        backgroundColor: "rgb(121, 134, 203)",
        pointerEvents: "none",
        zIndex: 9999,
        borderRadius: "6px",
      }}
    />
  );
};

export default TodoBox;
