import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { useValidateForm } from "../../hooks/useValidateForm";
import { gpContactSchema } from "../../validationSchemas/patientDetailsSchema";
import { useNavFreedom } from "../../hooks/useNavFreedom";
import { formErrorContext } from "../../context/formErrorsContext";
import { formStateContext } from "../../context/formStateContext";

import Button from "../../components/button/Button";
import SimpleInput from "../../components/simpleInput/SimpleInput";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

import "./gpContactDetails.css";

const GpContactDetails = () => {
  const { inputs, setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);
  const navigate = useNavigate();
  const { validateForm } = useValidateForm();

  const navQuery = useNavFreedom();

  const handleNext = async () => {
    const validationResult = await validateForm(gpContactSchema);
    if (!validationResult && !navQuery) return;

    navigate("/consent" + navQuery);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  return (
    <section>
      <h1>GP Contact Details</h1>
      <hr />
      <form>
        <div>
          <h3 className="input-label">GP Name</h3>
          <div className="double-simple-input">
            <SimpleInput type="text" label="First" id="gpFName" />
            <SimpleInput type="text" label="Last" id="gpLName" />
          </div>
        </div>
        <div>
          <h3 className="input-label">GP Clinic Address</h3>
          <textarea
            id="gpClinicAddress"
            className="input-textarea"
            onChange={(e) => handleInputChange(e, "gpClinicAddress")}
            value={
              typeof inputs["gpClinicAddress"] === "string"
                ? inputs["gpClinicAddress"]
                : ""
            }
          ></textarea>
          <ErrorMessage id="gpClinicAddress" />
        </div>
        <div>
          <h1 className="mt2">Medical Insurance Details</h1>
          <hr />
          <div className="medical-insurer__container">
            <h3 className="input-label">
              Medical Insurer <span className="required-tag">Required</span>
            </h3>
            {/* I might look at creating a custom component for this as there is some repetition (created from array of options)*/}
            <label>
              <input
                type="radio"
                name="option"
                value="vhi"
                checked={"vhi" === inputs["medicalInsurer"]}
                onChange={(e) => handleInputChange(e, "medicalInsurer")}
              />
              VHI
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="irishLife"
                checked={"irishLife" === inputs["medicalInsurer"]}
                onChange={(e) => handleInputChange(e, "medicalInsurer")}
              />
              Irish Life
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="layaHealth"
                checked={"layaHealth" === inputs["medicalInsurer"]}
                onChange={(e) => handleInputChange(e, "medicalInsurer")}
              />
              Laya Healthcare
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="none"
                checked={"none" === inputs["medicalInsurer"]}
                onChange={(e) => handleInputChange(e, "medicalInsurer")}
              />
              None
            </label>
            <ErrorMessage id="medicalInsurer" />
          </div>
          {inputs["medicalInsurer"] === "vhi" && (
            <div>
              <h3 className="input-label">VHI Policy Number</h3>
              <SimpleInput id="insurancePolicyNum" label="" type="text" />
            </div>
          )}
        </div>
        <div className="progress-buttons__container">
          <Button
            handleClick={() => navigate("/address-details" + navQuery)}
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

export default GpContactDetails;
