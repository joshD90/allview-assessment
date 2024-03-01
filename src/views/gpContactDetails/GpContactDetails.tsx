import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import SimpleInput from "../../components/simpleInput/SimpleInput";

import "./gpContactDetails.css";

const GpContactDetails = () => {
  const navigate = useNavigate();
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
          <textarea id="gpClinicAddress" className="input-textarea"></textarea>
        </div>
        <div>
          <h1>Medical Insurance Details</h1>
          <hr />
          <div className="medical-insurer__container">
            <h3 className="input-label">Medical Insurer</h3>
            <label>
              <input type="radio" name="option" value="vhi" checked />
              VHI
            </label>
            <label>
              <input type="radio" name="option" value="irishLife" />
              Irish Life
            </label>
            <label>
              <input type="radio" name="option" value="layaHealth" />
              Laya Healthcare
            </label>
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
          <Button handleClick={() => navigate("/consent")}>Next</Button>
        </div>
      </form>
    </section>
  );
};

export default GpContactDetails;
