import { useNavigate } from "react-router-dom";

import { locationOptions } from "../../assets/locations";
import Button from "../../components/button/Button";
import SelectInput from "../../components/selectInput/SelectInput";
import "./appointmentDetails.css";
import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";
import { appointmentTypes } from "../../assets/appointmentTypes";
import { useValidateForm } from "../../hooks/useValidateForm";
import { appointmentDetailSchema } from "../../validationSchemas/patientDetailsSchema";
import { formErrorContext } from "../../context/formErrorsContext";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const AppointmentDetails = () => {
  const navigate = useNavigate();
  const { inputs, setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);

  const { validateForm } = useValidateForm();

  const handleDescribeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs((prev) => ({
      ...prev,
      ["describeIssues"]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, ["describeIssues"]: "" }));
  };

  const handleNext = async () => {
    const validationResult = await validateForm(appointmentDetailSchema);
    if (!validationResult) return;

    navigate("/contact-details");
  };

  return (
    <section>
      <form>
        <h1>Appointment Details</h1>
        <hr />
        <SelectInput
          options={appointmentTypes}
          id="appointmentType"
          label="Appointment Type"
        />
        <SelectInput
          options={locationOptions}
          id="appointmentLocation"
          label="Appointment Location"
        />
        <div className="describe-issues__container">
          <label className="input-label">Describe Your Issues</label>
          <textarea
            className="input-textarea"
            id="describeIssues"
            onChange={handleDescribeChange}
            value={
              typeof inputs["describeIssues"] === "string"
                ? inputs["describeIssues"]
                : ""
            }
          ></textarea>
          <ErrorMessage id="describeIssues" />
        </div>
        <div className="progress-buttons__container">
          <Button handleClick={handleNext}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentDetails;
