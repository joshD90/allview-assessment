import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datePickerContainer.css";
import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";
import { formErrorContext } from "../../context/formErrorsContext";

const DatePickerContainer = () => {
  const { inputs, setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);
  return (
    <DatePicker
      onChange={(date) => {
        if (!date) return;

        setInputs((prev) => ({ ...prev, ["dob"]: date.toISOString() }));
        setErrors((prev) => ({ ...prev, ["dob"]: "" }));
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
