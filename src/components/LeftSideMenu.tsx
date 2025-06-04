import { DatePickerProvider } from "../providers/DatePickerProvider";
import DatePicker from "./Composite/DatePickerComp";
import Footer from "./Footer";

const LeftSideMenu = () => {
  return (
    <div className="flex flex-col w-[256px] bg-transparent h-[100%]">
      <DatePickerProvider>
        <DatePicker>
          <DatePicker.Title />
          <DatePicker.ContentHeader />
          <DatePicker.Content />
        </DatePicker>
      </DatePickerProvider>
      <Footer/>
    </div>
  );
};

export default LeftSideMenu;
