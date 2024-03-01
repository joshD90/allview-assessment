import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import "./patientConsentDetails.css";

const PatientConsentDetails = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Consent</h1>
      <hr />
      <form action="">
        <div className="agreements-inputs__container">
          <label htmlFor="appointmentProcess">
            <input
              type="checkbox"
              id="appointmentProcess"
              name="appointmentProcess"
            />
            Please confirm that you understand the Appointment Process
          </label>
          <label htmlFor="privacyPolicy">
            <input type="checkbox" id="privacyPolicy" name="privacyPolicy" />
            By submitting this form, you are agreeing to our Privacy Policy
          </label>
          {/* TODO: Update this with dynamic insurer */}
          <label htmlFor="insuranceConsentToShare">
            <input
              type="checkbox"
              id=" insuranceConsentToShare"
              name="insuranceConsentToShare"
            />
            Consent to sharing your data with Vhi Healthcare
          </label>
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
          <Button handleClick={() => navigate("/result")}>Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default PatientConsentDetails;
