import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datePickerContainer.css";
import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";

const DatePickerContainer = () => {
  const { inputs, setInputs } = useContext(formStateContext);

  return (
    <DatePicker
      onChange={(date) => {
        if (!date) return;
        console.log(date, "date select");
        setInputs((prev) => ({ ...prev, ["dob"]: date.toISOString() }));
        return;
      }}
      dateFormat="dd/MM/yyyy"
      selected={
        typeof inputs["dob"] === "string" ? new Date(inputs["dob"]) : null
      }
    />
  );
};

export default DatePickerContainer;
