import { FC } from "react";
import Select from "react-select";

import "../../views/formContainer/formContainer.css";
import "./selectInput.css";

type SelectOption = { value: string; label?: string };

type Props = { label: string; id: string; options: SelectOption[] };

// TODO:Perhaps improve the styles / look at focus and border
const SelectInput: FC<Props> = ({ label, id, options }) => {
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
      />
    </div>
  );
};

export default SelectInput;
