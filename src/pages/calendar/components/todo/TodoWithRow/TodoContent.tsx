import React, { type ReactNode } from "react";

interface TodoContentProps {
  className?: string;
  children?: ReactNode;
}

interface TodoContentComponent extends React.FC<TodoContentProps> {
  Main: React.FC<{ children?: ReactNode }>;
  Side: React.FC<{ children?: ReactNode }>;
}

const TodoContent: TodoContentComponent = ({ className = "", children }) => {
  return (
    <div
      className={`relative flex flex-grow flex-shrink basis-auto overflow-y-auto h-full ${className}`}
    >
      {children}
    </div>
  );
};

const Main: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className="w-full flex relative  h-[1152px]">{children}</div>;
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
