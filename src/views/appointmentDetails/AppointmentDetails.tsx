import { useNavigate } from "react-router-dom";

import { locationOptions } from "../../assets/locations";
import Button from "../../components/button/Button";
import SelectInput from "../../components/selectInput/SelectInput";
import "./appointmentDetails.css";
import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";

const appointmentTypes = [
  { value: "dermatology", label: "Dermatology" },
  { value: "opthamology", label: "Opthamology" },
  { value: "vascular", label: "Vascular" },
];

const AppointmentDetails = () => {
  const navigate = useNavigate();
  const { inputs, setInputs } = useContext(formStateContext);

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
        <div className="describe-issues__container">
          <label className="input-label">Describe Your Issues</label>
          <textarea
            className="input-textarea"
            id="describeIssues"
            onChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                ["describeIssues"]: e.target.value,
              }))
            }
            value={inputs["describeIssues"]}
          ></textarea>
        </div>
        <div className="progress-buttons__container">
          <Button handleClick={() => navigate("/contact-details")}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentDetails;
