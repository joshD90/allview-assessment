import { useContext } from "react";
import { formStateContext } from "../../context/formStateContext";

const InfoOut = () => {
  const { inputs } = useContext(formStateContext);
  return (
    <table>
      <thead>
        <tr>
          <th style={{ textAlign: "start" }}>Key</th>
          <th style={{ textAlign: "start" }}>Data</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(inputs).map((input) => (
          <tr key={input[0]}>
            <td style={{ paddingRight: "2rem" }}>{input[0]}</td>
            <td>{input[1].toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfoOut;
