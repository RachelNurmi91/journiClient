import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Time({ selectedDate, onChange, placeholder }) {
  const parsedDate =
    typeof selectedDate === "string" ? new Date(selectedDate) : selectedDate;

  return (
    <DatePicker
      selected={parsedDate}
      onChange={(time) => onChange(time)}
      disabledKeyboardNavigation
      withPortal
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      className="date-time"
      placeholderText={placeholder}
    />
  );
}
export default Time;
