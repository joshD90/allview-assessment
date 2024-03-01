import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import SimpleInput from "../../components/simpleInput/SimpleInput";

import "./gpContactDetails.css";
import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";
import { useValidateForm } from "../../hooks/useValidateForm";
import { gpContactSchema } from "../../validationSchemas/patientDetailsSchema";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const GpContactDetails = () => {
  const { inputs, setInputs } = useContext(formStateContext);
  const navigate = useNavigate();
  const { validateForm } = useValidateForm();

  const handleNext = async () => {
    const validationResult = await validateForm(gpContactSchema);
    if (!validationResult) return;

    navigate("/consent");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));
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
          <h1>Medical Insurance Details</h1>
          <hr />
          <div className="medical-insurer__container">
            <h3 className="input-label">Medical Insurer</h3>
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
            <ErrorMessage id="medicalInsurer" />
          </div>
          <div>
            {/* TODO: Make this dynamic */}
            <h3 className="input-label">Policy Number</h3>
            <SimpleInput id="insurancePolicyNum" label="" type="text" />
          </div>
        </div>
        <div className="progress-buttons__container">
          <Button handleClick={() => navigate("/address-details")} secondary>
            Previous
          </Button>
          <Button handleClick={handleNext}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default GpContactDetails;
