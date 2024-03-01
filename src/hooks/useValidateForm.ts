import { useContext } from "react";
import { formStateContext } from "../context/formStateContext";

import { formErrorContext } from "../context/formErrorsContext";
import { ValidationError, ObjectSchema, AnyObject } from "yup";
import { IterableStringType } from "../types";

export const useValidateForm = () => {
  const { inputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);

  const validateForm = async (validationSchema: ObjectSchema<AnyObject>) => {
    try {
      const validationResult = await validationSchema.validate(inputs, {
        abortEarly: false,
      });
      return validationResult;
    } catch (error) {
      setErrors((prev) => {
        if (error instanceof ValidationError) {
          const errorCollection: IterableStringType = {};

          error.inner.forEach((err) => {
            if (!err.path) return;
            let errPath = err.path;
            let errMsg = err.message;

            if (err.path.includes("dob")) {
              errPath = "dob";
              errMsg = "Please check for Issues";
            }
            if (err.path.toLowerCase().includes("consent"))
              errPath = "consentChecks";

            errorCollection[errPath] = errMsg;
          });

          return { ...prev, ...errorCollection };
        } else {
          return { ...prev, ["generalError"]: (error as Error).message };
        }
      });
      return null;
    }
  };

  return { validateForm };
};
