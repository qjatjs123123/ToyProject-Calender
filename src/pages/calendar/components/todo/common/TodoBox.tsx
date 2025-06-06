/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Text from "../../../../../components/common/Text";
import { formatTimeRange } from "../../../../../util/calendar";

interface TodoBoxProps{
  setShowDetailModal: (state: boolean) => void;
  tempTodoBox: any;
  current: any;
}

const TodoBox: React.FC<TodoBoxProps> = ({
  setShowDetailModal,
  tempTodoBox,
  current,
}) => {
  const data = {...tempTodoBox}

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowDetailModal!(true);

    if(current)
      current.current = data;
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      className="flex flex-col p-1"
      style={{
        position: "absolute",
        top : tempTodoBox.top,
        left: tempTodoBox.left,
        width: tempTodoBox.width,
        height: tempTodoBox.height,
        backgroundColor: "rgb(121, 134, 203)",
        zIndex: 88,
        borderRadius: "6px",
        border: "1px solid white",
      }}
    >
      <Text size="xs" color="white" weight="bold">
        {tempTodoBox.title}
      </Text>
      <Text size="xs" color="white" weight="bold">
        {formatTimeRange(tempTodoBox.top, tempTodoBox.top + tempTodoBox.height)}
      </Text>
    </div>
  );
};

export default TodoBox;
