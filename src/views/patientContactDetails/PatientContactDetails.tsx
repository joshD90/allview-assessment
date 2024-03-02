import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Button from "../../components/button/Button";
import SimpleInput from "../../components/simpleInput/SimpleInput";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import DatePickerContainer from "../../components/datePicker/DatePickerContainer";

import { formErrorContext } from "../../context/formErrorsContext";
import { formStateContext } from "../../context/formStateContext";
import { useValidateForm } from "../../hooks/useValidateForm";
import { patientDetailsSchema } from "../../validationSchemas/patientDetailsSchema";

import "./patientContactDetails.css";
import { useNavFreedom } from "../../hooks/useNavFreedom";

const PatientContactDetails = () => {
  const { inputs, setInputs } = useContext(formStateContext);
  const { validateForm } = useValidateForm();
  const { setErrors } = useContext(formErrorContext);
  const navQuery = useNavFreedom();

  const navigate = useNavigate();

  const handle16Change = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: boolean
  ) => {
    const whichWay = value ? e.target.checked : !e.target.checked;
    setInputs((prev) => ({ ...prev, ["over16"]: whichWay }));
    setErrors((prev) => ({ ...prev, ["over16"]: "" }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleNext = async () => {
    const validationResult = await validateForm(patientDetailsSchema);
    if (!validationResult && !navQuery) return;

    navigate("/address-details" + navQuery);
  };

  return (
    <section>
      <h1>Patient Contact Details</h1>
      <hr />

      <form action="">
        <h3 className="input-label">Name</h3>
        <div className="double-simple-input">
          <SimpleInput type="text" label="First" id="patientFName" />
          <SimpleInput type="text" label="Last" id="patientLName" />
        </div>
        <h3 className="input-label">
          Email <span className="required-tag">Required</span>
        </h3>

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
          <div className="age-select__container">
            <h3 className="input-label">Select Date of Birth</h3>
            <DatePickerContainer />
            <ErrorMessage id="dob" />
          </div>
          <div className="age-confirm__container">
            <h3 className="input-label">
              Over 18 Years Old? <span className="required-tag">Required</span>
            </h3>
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
        {inputs["over16"] === false && (
          <div className="medical-insurer__container">
            <h3 className="input-label">Your Relationship With The Patient</h3>
            <label>
              <input
                type="radio"
                name="option"
                value="parent"
                checked={"parent" === inputs["relationshipStatus"]}
                onChange={(e) => handleInputChange(e, "relationshipStatus")}
              />
              Parent
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="guardian"
                checked={"guardian" === inputs["relationshipStatus"]}
                onChange={(e) => handleInputChange(e, "relationshipStatus")}
              />
              Guardian
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="other"
                checked={"other" === inputs["relationshipStatus"]}
                onChange={(e) => handleInputChange(e, "relationshipStatus")}
              />
              Other
            </label>

            <ErrorMessage id="relationshipStatus" />
          </div>
        )}

        <div className="progress-buttons__container">
          <Button
            handleClick={() => navigate("/appointment-details" + navQuery)}
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
