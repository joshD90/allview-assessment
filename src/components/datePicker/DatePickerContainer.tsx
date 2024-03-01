import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datePickerContainer.css";

const DatePickerContainer = () => {
  return <DatePicker onChange={(date) => console.log(date)} />;
};

export default DatePickerContainer;
