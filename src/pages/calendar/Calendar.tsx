import Layout from "../../layouts/Layout";
import { HeaderProvider } from "../../providers/HeaderProvider";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import TodoCell from "./components/todo/TodoCell";
import TodoCellSeparators from "./components/todo/TodoCellSeperator";
import SeparatorBar from "./components/todo/TodoSeperatorBar";
import TodoTimeCell from "./components/todo/TodoTimeCell";

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
      <div className="overflow-hidden h-full">
        <div className="w-[100%] h-[81px] flex ">
          <div className="w-[70px] h-[100%] min-w-[70px] ">
            <span className="relative top-[64px]">GMT+09</span>
          </div>
          <div className="border-b border-b-[#dde3ea] flex w-[calc(100%-81px)]">
            <div className="w-2 border-r border-[#dde3ea] h-full no-br" />

            <div className="flex relative todo-cell no-br">
              <div className="separator"></div>
              <div className="todo-cell no-br flex flex-col items-center justify-center gap-2">
                <div>일</div>
                <div>27</div>
              </div>
            </div>

            <div className="flex relative todo-cell no-br">
              <div className="separator"></div>
              <div className="todo-cell no-br"></div>
            </div>

            <div className="flex relative todo-cell no-br">
              <div className="separator"></div>
              <div className="todo-cell no-br"></div>
            </div>

            <div className="flex relative todo-cell no-br">
              <div className="separator"></div>
              <div className="todo-cell no-br"></div>
            </div>

            <div className="flex relative todo-cell no-br">
              <div className="separator"></div>
              <div className="todo-cell no-br"></div>
            </div>

            <div className="flex relative todo-cell no-br">
              <div className="separator"></div>
              <div className="todo-cell no-br"></div>
            </div>

            <div className="flex relative todo-cell no-br">
              <div className="separator"></div>
              <div className="todo-cell no-br"></div>
            </div>
        
          </div>
        </div>
        <div className="relative flex flex-grow flex-shrink basis-auto overflow-y-auto h-full">
          <TodoTimeCell />
          <div className="w-full flex relative  h-[1152px]">
            <TodoCellSeparators />
            <SeparatorBar />
            <TodoCell />
            <TodoCell />
            <TodoCell />
            <TodoCell />
            <TodoCell />
            <TodoCell />
            <TodoCell />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
