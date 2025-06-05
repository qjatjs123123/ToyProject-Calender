import DatePicker from "../../../../components/Composite/DatePickerComp";
import Footer from "../../../../components/common/Footer";
import { DatePickerProvider } from '../../../../providers/DatePickerProvider';

const SideBar = () => {
  return (
    <>
      <DatePickerProvider>
        <DatePicker>
          <DatePicker.Title />
          <DatePicker.ContentHeader />
          <DatePicker.Content />
        </DatePicker>
      </DatePickerProvider>
      <Footer/>
    </>
  );
};

export default SideBar;
