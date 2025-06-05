import React from "react";

const TodoCell = ({ children }: { children?: React.ReactNode }) => {
  return <div className="todo-cell">{children}</div>;
};

export default TodoCell;
