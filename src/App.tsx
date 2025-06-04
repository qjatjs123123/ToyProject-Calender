import "./App.css";
import DatePicker from "./components/DatePicker/DatePicker";
import { DatePickerProvider } from "./providers/DatePickerProvider";

function App() {
  return (
    <div>
      <DatePickerProvider>
        <DatePicker>
          <DatePicker.Title />
          <DatePicker.ContentHeader />
          <DatePicker.Content />
        </DatePicker>
      </DatePickerProvider>
    </div>
  );
}

export default App;
