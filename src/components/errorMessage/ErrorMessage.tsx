import { FC, useContext } from "react";
import { formErrorContext } from "../../context/formErrorsContext";

import "./errorMessage.css";

type Props = { id: string };

const ErrorMessage: FC<Props> = ({ id }) => {
  const { errors } = useContext(formErrorContext);

  // if (!errors[id] || errors[id] === "") return null;

  return (
    <div className="form-errors">
      <p>{errors[id]}</p>
    </div>
  );
};

export default ErrorMessage;
