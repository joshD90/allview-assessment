import { FC, useContext } from "react";

import { formStateContext } from "../../context/formStateContext";
import { formErrorContext } from "../../context/formErrorsContext";

import ErrorMessage from "../errorMessage/ErrorMessage";

import "./simpleInput.css";

type Props = { type: "password" | "text" | "email"; label: string; id: string };

const SimpleInput: FC<Props> = ({ type, id, label }) => {
  const { inputs, setInputs } = useContext(formStateContext);
  const { setErrors } = useContext(formErrorContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [id]: e.target.value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };
  return (
    <div className="simple-input__container">
      <input
        type={type}
        id={id}
        onChange={handleChange}
        value={
          typeof inputs[id] === "string" || typeof inputs[id] === "number"
            ? (inputs[id] as string | number)
            : ""
        }
      />
      <label>{label}</label>
      <ErrorMessage id={id} />
    </div>
  );
};

export default SimpleInput;
