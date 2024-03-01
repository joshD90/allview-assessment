import { Outlet } from "react-router-dom";

import ProgressBar from "../../components/progressBar/ProgressBar";

import "./formContainer.css";

const FormContainer = () => {
  return (
    <section className="form-container">
      <ProgressBar />
      <Outlet />
    </section>
  );
};

export default FormContainer;
