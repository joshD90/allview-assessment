import { FC, useContext } from "react";

import "./simpleInput.css";
import { formStateContext } from "../../context/formStateContext";

type Props = { type: "password" | "text" | "email"; label: string; id: string };

const SimpleInput: FC<Props> = ({ type, id, label }) => {
  const { inputs, setInputs } = useContext(formStateContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [id]: e.target.value }));
  };
  return (
    <div className="simple-input__container">
      <input type={type} id={id} onChange={handleChange} value={inputs[id]} />
      <label>{label}</label>
    </div>
  );
};

export default SimpleInput;
