import { useContext, useEffect, useMemo } from "react";
import { formStateContext } from "../context/formStateContext";
import { fileContext } from "../context/fileContext";
import { formErrorContext } from "../context/formErrorsContext";
import { useValidateForm } from "./useValidateForm";

import {
  appointmentDetailSchema,
  patientAddressSchema,
  patientDetailsSchema,
  gpContactSchema,
  consentSchema,
} from "../validationSchemas/patientDetailsSchema";

export const useSubmitForm = () => {
  const { inputs } = useContext(formStateContext);
  const { files } = useContext(fileContext);
  const { setErrors } = useContext(formErrorContext);
  const { validateForm } = useValidateForm();

  const abortControllerMemo = useMemo(() => new AbortController(), []);

  useEffect(() => {
    return () => abortControllerMemo.abort();
  }, [abortControllerMemo]);

  const handlePostFetch = async () => {
    const formData = new FormData();
    //we use inbuilt concat from yup to join all the schema's together for a final check
    const entireForm = appointmentDetailSchema
      .concat(patientAddressSchema)
      .concat(gpContactSchema)
      .concat(consentSchema)
      .concat(patientDetailsSchema);

    const validated = await validateForm(entireForm);

    if (!validated)
      return setErrors((prev) => ({
        ...prev,
        ["generalError"]: "There are Errors in the Form",
      }));

    Object.entries(inputs).forEach(([key, value]) => {
      formData.append(key, JSON.stringify(value));
    });

    files.forEach((file) => formData.append("file", file));

    try {
      const response = await fetch("http://dummyUrl.com", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw Error(response.statusText);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setErrors((prev) => {
        if (!(error instanceof Error)) return prev;
        return {
          ...prev,
          ["generalErrors"]: error.message,
        };
      });
    }
  };

  return { handlePostFetch };
};
