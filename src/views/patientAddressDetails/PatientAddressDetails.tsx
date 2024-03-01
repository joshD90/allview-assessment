import { useNavigate } from "react-router-dom";

import { countryOptions } from "../../assets/countries";
import Button from "../../components/button/Button";
import SelectInput from "../../components/selectInput/SelectInput";
import SimpleInput from "../../components/simpleInput/SimpleInput";

import "./patientAddressDetails.css";

const PatientAddressDetails = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Patient Address</h1>
      <hr />
      <form>
        <h3 className="input-label">Address</h3>
        <SimpleInput
          label="Street Address"
          id="patientStreetAddress"
          type="text"
        ></SimpleInput>
        <SimpleInput
          label="Address Line 2"
          id="patientAddressLine2"
          type="text"
        ></SimpleInput>
        <div className="double-simple-input">
          <SimpleInput label="City" id="patientAddressCity" type="text" />
          <SimpleInput label="County" id="patientAddressCounty" type="text" />
        </div>
        <div className="double-simple-input">
          <SimpleInput label="Eircode" id="paitentAddressEircode" type="text" />
          <div className="country-select__container">
            <SelectInput
              options={countryOptions}
              label=""
              id="patientAddressCountry"
            />
            <label htmlFor="">Country</label>
          </div>
        </div>
        <div className="progress-buttons__container">
          <Button handleClick={() => navigate("/contact-details")} secondary>
            Previous
          </Button>
          <Button handleClick={() => navigate("/gp-contact")}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default PatientAddressDetails;
