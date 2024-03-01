import { FC } from "react";
import "./progressBar.css";
import { useDetermineStep } from "../../hooks/useDetermineStep";

type Props = { percentComplete?: number };

const ProgressBar: FC<Props> = ({ percentComplete }) => {
  const currentStep = useDetermineStep();

  const definitePercent = percentComplete ?? currentStep * 20;

  return (
    <div className="progress__container">
      <div className="progress__bar" style={{ width: `${definitePercent}%` }}>
        <span
          className={`${definitePercent === 0 ? "progress__push-right" : ""}`}
        >
          {definitePercent}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
