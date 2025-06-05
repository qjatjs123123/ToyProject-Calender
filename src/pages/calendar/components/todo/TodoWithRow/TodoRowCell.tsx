import React from "react";

const TodoRowCell = ({ children }: { children?: React.ReactNode }) => {
  return <div className="todo-cell">{children}</div>;
};

export default TodoRowCell;
