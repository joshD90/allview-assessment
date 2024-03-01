import { FC, useContext, useEffect } from "react";
import { formErrorContext } from "../../context/formErrorsContext";

import "./errorMessage.css";

type Props = { id: string };

const ErrorMessage: FC<Props> = ({ id }) => {
  const { errors } = useContext(formErrorContext);

  useEffect(() => {
    console.log(errors[id], id);
    if (errors[id]) console.log(errors[id]);
  }, [errors, id]);

  // if (!errors[id] || errors[id] === "") return null;

  return (
    <div className="form-errors">
      <p>{errors[id]}</p>
    </div>
  );
};

export default ErrorMessage;
