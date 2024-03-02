import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import ProgressBar from "../../components/progressBar/ProgressBar";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import NavigateFreely from "../../components/navigateFreely/NavigateFreely";

import "./formContainer.css";

const FormContainer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <section className="form-container">
      <NavigateFreely />
      <div className="general-error__container">
        <ErrorMessage id="generalError" />
      </div>
      <ProgressBar />
      <Outlet />
    </section>
  );
};

export default FormContainer;
