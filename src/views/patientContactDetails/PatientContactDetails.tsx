import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import SimpleInput from "../../components/simpleInput/SimpleInput";

import "./patientContactDetails.css";

const PatientContactDetails = () => {
  const navigate = useNavigate();
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
              <input type="number" placeholder="DD" className="number-input" />
              <input type="number" placeholder="MM" className="number-input" />
              <input
                type="number"
                placeholder="YYYY"
                className="number-input"
              />
            </div>
          </div>
          <div className="age-confirm__container">
            <h3 className="input-label">Over 18 Years Old?</h3>
            <div className="age-confirm__container">
              <div>
                <input type="checkbox" />
                <label htmlFor="">Yes, I am over 18 years old</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="">The Patient is less than 18 years old</label>
              </div>
            </div>
          </div>
        </div>
        <div className="progress-buttons__container">
          <Button
            handleClick={() => navigate("/appointment-details")}
            secondary
          >
            Previous
          </Button>
          <Button handleClick={() => navigate("/address-details")}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default PatientContactDetails;
