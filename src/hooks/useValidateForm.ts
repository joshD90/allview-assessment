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
        //most of the heavy lifting is done in the catch block.  Errors are given back as ValidationError[]
        if (error instanceof ValidationError) {
          const errorCollection: IterableStringType = {};

          error.inner.forEach((err) => {
            if (!err.path) return;
            let errPath = err.path;

            if (err.path.toLowerCase().includes("consent"))
              errPath = "consentChecks";

            errorCollection[errPath] = err.message;
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
