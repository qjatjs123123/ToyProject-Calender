import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { HeaderProvider } from "../../providers/HeaderProvider";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import TodoWithRowCells from "./components/todo/TodoWithRow/TodoWithRowCells";
import type { RootState } from "../../store";
import { MODE } from "../../util/constants";
import TodoWithCell from "./components/todo/TodoWithCell/TodoWithCell";

const Calendar = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);

  return (
    <Layout
      header={
        <HeaderProvider>
          <Header />
        </HeaderProvider>
      }
      sidebar={<SideBar />}
    >
      {mode !== MODE.MONTH ? <TodoWithRowCells /> : <TodoWithCell />}
    </Layout>
  );
};

export default Calendar;
