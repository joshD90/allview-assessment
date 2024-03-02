import { useContext } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { formStateContext } from "../../context/formStateContext";
import { formErrorContext } from "../../context/formErrorsContext";

import "./individualDates.css";
//currently not in use.  This adheres to the design of the 3 seperate boxes.  This can be dropped back into PatientContactDetails.tsx instead of the DatePickerContainer and h3 associated with.  Please update Validation schema associated with if doing so.

const IndividualDates = () => {
  const { inputs, setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);

  const handleDOBChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const value = parseInt(e.target.value);
    const currentYear = new Date(Date.now()).getFullYear();
    //some rough validation checking
    if (isNaN(value)) return;
    if (value < 0 || value > currentYear) return;
    if (key === "dobDay" && value > 31) return;
    if (key === "dobMonth" && value > 12) return;

    setInputs((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, ["dob"]: "" }));
  };
  return (
    <div>
      <h3 className="input-label">Date of Birth</h3>
      <div className="dob__container">
        <input
          type="number"
          placeholder="DD"
          className="number-input"
          onChange={(e) => handleDOBChange(e, "dobDay")}
          value={typeof inputs["dobDay"] === "number" ? inputs["dobDay"] : ""}
        />
        <input
          type="number"
          placeholder="MM"
          className="number-input"
          onChange={(e) => handleDOBChange(e, "dobMonth")}
          value={
            typeof inputs["dobMonth"] === "number" ? inputs["dobMonth"] : ""
          }
        />
        <input
          type="number"
          placeholder="YYYY"
          className="number-input"
          onChange={(e) => handleDOBChange(e, "dobYear")}
          value={typeof inputs["dobYear"] === "number" ? inputs["dobYear"] : ""}
        />
      </div>
      <ErrorMessage id="dob" />
    </div>
  );
};

export default IndividualDates;
