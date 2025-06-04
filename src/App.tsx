import "./App.css";
import CalendarLayout from "./components/CalenderLayout";
import Header from "./components/Header";
import LeftSideMenu from "./components/LeftSideMenu";
import RightSideMenu from "./components/RightSideMenu";

function App() {
  return (
    <>
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        <LeftSideMenu />
        <CalendarLayout />
        <RightSideMenu />
      </div>
    </>
  );
}

export default App;
