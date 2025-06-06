import React, { type ReactNode } from "react";
import TodoBox from "../common/TodoBox";
import TodoModal from "../common/TodoModal";
import { useTodoEvents } from "../providers/TodoProvider";
import TodoDetailModal from "../common/TodoDetailModal";

interface TodoContentProps {
  className?: string;
  children?: ReactNode;
}

interface TodoContentComponent extends React.FC<TodoContentProps> {
  Main: React.FC<MainProps>;
  Side: React.FC<{ children?: ReactNode }>;
}

const TodoContent: TodoContentComponent = ({ className = "", children }) => {
  return (
    <div
      className={`relative flex flex-grow flex-shrink basis-auto overflow-y-auto h-[calc(100%-81px)] ${className}`}
    >
      {children}
    </div>
  );
};

type MainProps = {
  children?: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  const {
    tempTodoBox,
    onTodoMouseDown,
    onTodoMouseMove,
    onTodoMouseUp,
    showModal,
    setShowModal,
    clickTodoBox,
    showDetailModal,
    setShowDetailModal,
  } = useTodoEvents();
  return (
    <div
      className="w-full flex relative h-[1152px]"
      onMouseDown={onTodoMouseDown}
      onMouseMove={onTodoMouseMove}
      onMouseUp={onTodoMouseUp}
    >
      {children}

      {tempTodoBox && <TodoBox tempTodoBox={tempTodoBox} current={clickTodoBox} setShowDetailModal={setShowDetailModal} />}
      {showModal && <TodoModal tempTodoBox={clickTodoBox.current} showModal={setShowModal}/>}
      {showDetailModal && <TodoDetailModal tempTodoBox={clickTodoBox.current} showModal={setShowDetailModal}/>}
    </div>
  );
};

const Side: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className={`grid grid-cols-1 gap-0 w-[70px] min-w-[70px]`}>
      {children}
    </div>
  );
};

TodoContent.Main = Main;
TodoContent.Side = Side;

export default TodoContent;
