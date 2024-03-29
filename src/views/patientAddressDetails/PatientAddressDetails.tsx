import { useNavigate } from "react-router-dom";

import { useNavFreedom } from "../../hooks/useNavFreedom";
import { useValidateForm } from "../../hooks/useValidateForm";

import { countryOptions } from "../../assets/countries";
import Button from "../../components/button/Button";
import SelectInput from "../../components/selectInput/SelectInput";
import SimpleInput from "../../components/simpleInput/SimpleInput";
import { patientAddressSchema } from "../../validationSchemas/patientDetailsSchema";
import FileInput from "../../components/fileInput/FileInput";

import "./patientAddressDetails.css";

const PatientAddressDetails = () => {
  const navigate = useNavigate();
  const { validateForm } = useValidateForm();
  const navQuery = useNavFreedom();

  const handleNext = async () => {
    const validationResult = await validateForm(patientAddressSchema);
    if (!validationResult && !navQuery) return;

    navigate("/gp-contact" + navQuery);
  };
  return (
    <section>
      <h1>Patient Address</h1>
      <hr />
      <form>
        <h3 className="input-label">Address</h3>
        <div className="mt1">
          <SimpleInput
            label="Street Address"
            id="patientStreetAddress"
            type="text"
          ></SimpleInput>
        </div>
        <div className="mt1">
          <SimpleInput
            label="Address Line 2"
            id="patientAddressLine2"
            type="text"
          ></SimpleInput>
        </div>
        <div className="double-simple-input mt1">
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
        <h3 className="input-label">Upload Proof of Address</h3>
        <FileInput />
        <div className="progress-buttons__container mt2">
          <Button
            handleClick={() => navigate("/contact-details" + navQuery)}
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

export default PatientAddressDetails;
