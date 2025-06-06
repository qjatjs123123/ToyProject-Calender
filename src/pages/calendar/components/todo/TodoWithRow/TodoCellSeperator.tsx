import React from "react";

const TodoCellSeparators = React.memo(() => {
  return (
    <div className="">
      {Array.from({ length: 24 }).map((_, idx) => (
        <div key={idx} className={`sJ9Raf ${idx === 12 ? "Izq6pb" : ""}`} />
      ))}
    </div>
  );
});

export default TodoCellSeparators;
