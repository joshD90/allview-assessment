import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormContainer from "./views/formContainer/FormContainer";

import "./App.css";
import AppointmentDetails from "./views/appointmentDetails/AppointmentDetails";
import PatientContactDetails from "./views/patientContactDetails/PatientContactDetails";
import GpContactDetails from "./views/gpContactDetails/GpContactDetails";
import PatientAddressDetails from "./views/patientAddressDetails/PatientAddressDetails";
import PatientConsentDetails from "./views/patientConsentDetails/PatientConsentDetails";

const App = () => {
  return (
    <section className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormContainer />}>
            <Route
              path="appointment-details"
              element={<AppointmentDetails />}
            />
            <Route path="contact-details" element={<PatientContactDetails />} />
            <Route path="gp-contact" element={<GpContactDetails />} />
            <Route path="address-details" element={<PatientAddressDetails />} />
            <Route path="consent" element={<PatientConsentDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
