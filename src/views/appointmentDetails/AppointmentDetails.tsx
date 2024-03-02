import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { formStateContext } from "../../context/formStateContext";
import { formErrorContext } from "../../context/formErrorsContext";
import { useNavFreedom } from "../../hooks/useNavFreedom";
import { useValidateForm } from "../../hooks/useValidateForm";

import { locationOptions } from "../../assets/locations";
import Button from "../../components/button/Button";
import { appointmentTypes } from "../../assets/appointmentTypes";
import { appointmentDetailSchema } from "../../validationSchemas/patientDetailsSchema";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import SelectInput from "../../components/selectInput/SelectInput";

import "./appointmentDetails.css";

const AppointmentDetails = () => {
  const navigate = useNavigate();
  const { inputs, setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);
  const navQuery = useNavFreedom();

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
    if (!validationResult && !navQuery) return;

    navigate(`/contact-details${navQuery}`);
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
