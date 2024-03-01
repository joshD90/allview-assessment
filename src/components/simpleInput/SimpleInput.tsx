import { FC } from "react";

import "./simpleInput.css";

type Props = { type: "password" | "text" | "email"; label: string; id: string };

const SimpleInput: FC<Props> = ({ type, id, label }) => {
  return (
    <div className="simple-input__container">
      <input type={type} id={id} />
      <label htmlFor="" className="">
        {label}
      </label>
    </div>
  );
};

export default SimpleInput;
