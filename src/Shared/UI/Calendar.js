import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar({
  selectedDate,
  onDateChange,
  placeholder,
  showTimes = false,
}) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onDateChange(date)}
      minDate={new Date()}
      disabledKeyboardNavigation
      className="date-time"
      withPortal
      placeholderText={placeholder}
    />
  );
}
export default Calendar;
