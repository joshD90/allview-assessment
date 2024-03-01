import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";

const InfoOut = () => {
  const { inputs } = useContext(formStateContext);
  return <div>{JSON.stringify(inputs)}</div>;
};

export default InfoOut;
