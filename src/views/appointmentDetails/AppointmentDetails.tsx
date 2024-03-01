import { useNavigate } from "react-router-dom";

import { locationOptions } from "../../assets/locations";
import Button from "../../components/button/Button";
import SelectInput from "../../components/selectInput/SelectInput";
import "./appointmentDetails.css";

const appointmentTypes = [
  { value: "dermatology", label: "Dermatology" },
  { value: "opthamology", label: "Opthamology" },
  { value: "vascular", label: "Vascular" },
];

const AppointmentDetails = () => {
  const navigate = useNavigate();

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
          id="appointmenLocation"
          label="Appointment Location"
        />
        <div className="input-textarea">
          <label htmlFor="" className="input-label">
            Describe Your Issues
          </label>
          <textarea></textarea>
        </div>
        <div className="progress-buttons__container">
          <Button handleClick={() => navigate("/contact-details")}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentDetails;
