import Layout from "../../layouts/Layout";
import { HeaderProvider } from "../../providers/HeaderProvider";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import TodoCell from "./components/todo/TodoCell";
import TodoCellSeparators from "./components/todo/TodoCellSeperator";
import SeparatorBar from "./components/todo/TodoSeperatorBar";
import TodoTimeCell from "./components/todo/TodoTimeCelL";

const Calendar = () => {
  return (
    <Layout
      header={
        <HeaderProvider>
          <Header />
        </HeaderProvider>
      }
      sidebar={<SideBar />}
    >
      <div className="relative h-full overflow-hidden flex flex-grow flex-shrink basis-auto overflow-y-auto">
        <TodoTimeCell />
        <div className="w-full flex relative h-[1152px]">
          <TodoCellSeparators />
          <SeparatorBar />
          <TodoCell/>
          <TodoCell/>
          <TodoCell/>
          <TodoCell/>
          <TodoCell/>
          <TodoCell/>
          <TodoCell/>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
