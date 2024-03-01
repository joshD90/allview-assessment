import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import SimpleInput from "../../components/simpleInput/SimpleInput";

import "./patientContactDetails.css";
import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";
import { useValidateForm } from "../../hooks/useValidateForm";
import { patientDetailsSchema } from "../../validationSchemas/patientDetailsSchema";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { formErrorContext } from "../../context/formErrorsContext";

const PatientContactDetails = () => {
  const { inputs, setInputs } = useContext(formStateContext);
  const { validateForm } = useValidateForm();
  const { setErrors } = useContext(formErrorContext);

  const navigate = useNavigate();

  const handleDOBChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const value = parseInt(e.target.value);
    const currentYear = new Date(Date.now()).getFullYear();

    if (isNaN(value)) return;
    if (value < 0 || value > currentYear) return;
    if (key === "dobDay" && value > 31) return;
    if (key === "dobMonth" && value > 12) return;

    setInputs((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, ["dob"]: "" }));
  };

  const handle16Change = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: boolean
  ) => {
    const whichWay = value ? e.target.checked : !e.target.checked;
    setInputs((prev) => ({ ...prev, ["over16"]: whichWay }));
    setErrors((prev) => ({ ...prev, ["over16"]: "" }));
  };

  const handleNext = async () => {
    const validationResult = await validateForm(patientDetailsSchema);
    if (!validationResult) return;

    navigate("/address-details");
  };

  return (
    <section>
      <h1>Patient Contact Details</h1>
      <hr />

      {/* TODO: fix styling and margins on h3 */}
      <form action="">
        <h3 className="input-label">Name</h3>
        <div className="double-simple-input">
          <SimpleInput type="text" label="First" id="patientFName" />
          <SimpleInput type="text" label="Last" id="patientLName" />
        </div>
        <h3 className="input-label">Email</h3>
        <div className="double-simple-input">
          <SimpleInput type="email" label="Email" id="patientEmail" />
          <SimpleInput
            type="email"
            label="Confirm Email"
            id="patientEmailConfirm"
          />
        </div>
        <div>
          <h3 className="input-label">Phone</h3>
          <SimpleInput label="Phone" id="patientPhone" type="text" />
        </div>
        <div className="age__container">
          <div>
            <h3 className="input-label">Date of Birth</h3>
            <div className="dob__container">
              <input
                type="number"
                placeholder="DD"
                className="number-input"
                onChange={(e) => handleDOBChange(e, "dobDay")}
                value={
                  typeof inputs["dobDay"] === "number" ? inputs["dobDay"] : ""
                }
              />
              <input
                type="number"
                placeholder="MM"
                className="number-input"
                onChange={(e) => handleDOBChange(e, "dobMonth")}
                value={
                  typeof inputs["dobMonth"] === "number"
                    ? inputs["dobMonth"]
                    : ""
                }
              />
              <input
                type="number"
                placeholder="YYYY"
                className="number-input"
                onChange={(e) => handleDOBChange(e, "dobYear")}
                value={
                  typeof inputs["dobYear"] === "number" ? inputs["dobYear"] : ""
                }
              />
            </div>
            <ErrorMessage id="dob" />
          </div>
          <div className="age-confirm__container">
            <h3 className="input-label">Over 18 Years Old?</h3>
            <div className="age-confirm__container">
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => handle16Change(e, true)}
                  checked={
                    typeof inputs["over16"] === "boolean" && inputs["over16"]
                  }
                />
                <label htmlFor="">Yes, I am over 16 years old</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => handle16Change(e, false)}
                  checked={
                    typeof inputs["over16"] === "boolean" && !inputs["over16"]
                  }
                />
                <label htmlFor="">The Patient is less than 16 years old</label>
              </div>
            </div>
            <ErrorMessage id="over16" />
          </div>
        </div>
        <div className="progress-buttons__container">
          <Button
            handleClick={() => navigate("/appointment-details")}
            secondary
          >
            Previous
          </Button>
          <Button handleClick={handleNext}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default PatientContactDetails;
