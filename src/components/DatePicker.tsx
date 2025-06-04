import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { getDays } from "../util/calendar";
import dayjs from "dayjs";
import { setDate } from "../store/calendar";

const DatePicker = () => {
  const selectedDate = useSelector((state: RootState) => state.calendar.date);
  const days = getDays(selectedDate); 

    const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-center">📅 데이트피커</h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) => {
          const isSelected = day.format("YYYY-MM-DD") === selectedDate;
          const isCurrentMonth = day.month() === dayjs(selectedDate).month();

          return (
            <button
              key={idx}
              onClick={() => dispatch(setDate(day.format("YYYY-MM-DD")))}
              className={`rounded-full w-10 h-10 flex items-center justify-center text-sm 
                ${isSelected ? "bg-blue-500 text-white font-bold" : ""}
                ${!isCurrentMonth ? "text-gray-400" : ""}
                hover:bg-blue-100 transition`}
            >
              {day.format("D")}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;
