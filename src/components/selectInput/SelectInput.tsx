import { FC, useContext } from "react";
import Select, { SingleValue } from "react-select";

import "../../views/formContainer/formContainer.css";
import "./selectInput.css";
import { formStateContext } from "../../context/formStateContext";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { formErrorContext } from "../../context/formErrorsContext";

type SelectOption = { value: string; label?: string };

type Props = { label: string; id: string; options: SelectOption[] };

// TODO:Perhaps improve the styles / look at focus and border
const SelectInput: FC<Props> = ({ label, id, options }) => {
  const { setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);

  const handleChange = (e: SingleValue<SelectOption>) => {
    if (!e) return;
    setInputs((prev) => ({ ...prev, [id]: e.value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="select-input__container">
      {!!label && (
        <label htmlFor={id} className="select-input__label input-label">
          {label}
        </label>
      )}
      <Select
        options={options}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
          }),

          control: (baseStyles, state) => ({
            ...baseStyles,
            width: "100%",
            boxShadow: state.isFocused ? "none" : "none",
          }),
        }}
        onChange={(e) => handleChange(e)}
      />
      <ErrorMessage id={id} />
    </div>
  );
};

export default SelectInput;
