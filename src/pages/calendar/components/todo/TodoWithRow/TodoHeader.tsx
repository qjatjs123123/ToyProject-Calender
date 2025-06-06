import React, { type ReactNode } from "react";
import Text from "../../../../../components/common/Text";

interface TodoHeaderProps {
  className?: string;
  children?: React.ReactNode;
}
interface TodoHeaderComponent extends React.FC<TodoHeaderProps> {
  HeaderCell: React.FC<{ children: ReactNode }>;
  EmptyCell: React.FC;
}

const TodoHeaderBase: React.FC<TodoHeaderProps> = ({ className = "", children }) => {
  return <div className={`${className}`}>{children}</div>;
};

const HeaderCell: React.FC<{ children: ReactNode }> = React.memo(({ children }) => {
  return (
    <div className="border-b border-b-[#dde3ea] flex w-[calc(100%-81px)]">
      <div className="w-2 border-r border-[#dde3ea] h-full no-br" />
      {children}
    </div>
  );
});

const EmptyCell: React.FC = React.memo(() => {
  return (
    <div className="w-[70px] h-[100%] min-w-[70px] ">
      <Text size="xs" align="center" className="relative top-[64px] ml-[15px]">GMT+09</Text>
    </div>
  );
});

const TodoHeader = React.memo(TodoHeaderBase) as unknown as TodoHeaderComponent;
TodoHeader.HeaderCell = HeaderCell;
TodoHeader.EmptyCell = EmptyCell;

export default TodoHeader;
