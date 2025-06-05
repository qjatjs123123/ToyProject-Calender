import Layout from "../../layouts/Layout";
import { HeaderProvider } from "../../providers/HeaderProvider";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import TodoWithRowCells from "./components/todo/TodoWithRowCells";

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
      <TodoWithRowCells />
    </Layout>
  );
};

export default Calendar;
