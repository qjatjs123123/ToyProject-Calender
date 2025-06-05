import Layout from "../../layouts/Layout";
import { HeaderProvider } from "../../providers/HeaderProvider";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";

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
      1
    </Layout>
  );
};

export default Calendar;
