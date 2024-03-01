import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import "./patientConsentDetails.css";
import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { useValidateForm } from "../../hooks/useValidateForm";
import { consentSchema } from "../../validationSchemas/patientDetailsSchema";
import { formErrorContext } from "../../context/formErrorsContext";

const PatientConsentDetails = () => {
  const navigate = useNavigate();
  const { inputs, setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);

  const { validateForm } = useValidateForm();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setInputs((prev) => ({ ...prev, [key]: e.target.checked }));
    setErrors((prev) => ({ ...prev, ["consentChecks"]: "" }));
  };

  const handleSubmit = async () => {
    const validateResult = await validateForm(consentSchema);
    if (!validateResult) return;
    navigate("/result");
  };

  return (
    <section>
      <h1>Consent</h1>
      <hr />
      <form action="">
        <div className="agreements-inputs__container">
          {/* Custom Inputs */}
          <label htmlFor="appointmentProcessConsent">
            <input
              type="checkbox"
              id="appointmentProcessConsent"
              name="appointmentProcessConsent"
              onChange={(e) =>
                handleInputChange(e, "appointmentProcessConsent")
              }
              checked={
                typeof inputs["appointmentProcessConsent"] === "boolean"
                  ? inputs["appointmentProcessConsent"]
                  : false
              }
            />
            Please confirm that you understand the Appointment Process
          </label>
          <label htmlFor="privacyPolicyConsent">
            <input
              type="checkbox"
              id="privacyPolicyConsent"
              name="privacyPolicyConsent"
              onChange={(e) => handleInputChange(e, "privacyPolicyConsent")}
              checked={
                typeof inputs["privacyPolicyConsent"] === "boolean"
                  ? inputs["privacyPolicyConsent"]
                  : false
              }
            />
            By submitting this form, you are agreeing to our Privacy Policy
          </label>
          {/* TODO: Update this with dynamic insurer */}
          <label htmlFor="insuranceConsentToShare">
            <input
              type="checkbox"
              id="insuranceConsentToShare"
              name="insuranceConsentToShare"
              onChange={(e) => handleInputChange(e, "insuranceConsentToShare")}
              checked={
                typeof inputs["insuranceConsentToShare"] === "boolean"
                  ? inputs["insuranceConsentToShare"]
                  : false
              }
            />
            Consent to sharing your data with Vhi Healthcare
          </label>
          <ErrorMessage id="consentChecks" />
        </div>
        <p className="consent-explainer">
          AllView Healthcare and Vhi Healthcare are two separate entities
          involved in the provision of this healthcare service. As part of your
          medical treatment, it may be necessary to share your personal and
          medical information between these two companies to ensure the
          continuity and quality of your care.
        </p>
        <div className="progress-buttons__container">
          <Button handleClick={() => navigate("/gp-contact")} secondary>
            Previous
          </Button>
          <Button handleClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default PatientConsentDetails;
