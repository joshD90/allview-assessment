import { FC } from "react";
import "./progressBar.css";
import { useDetermineStep } from "../../hooks/useDetermineStep";

type Props = { percentComplete?: number };

const ProgressBar: FC<Props> = ({ percentComplete }) => {
  const currentStep = useDetermineStep();

  const definitePercent = percentComplete ?? currentStep * 20;

  return (
    <div>
      <p className="progress__stepNum">Step {currentStep}/5</p>
      <div className="progress__container">
        <div className="progress__bar" style={{ width: `${definitePercent}%` }}>
          {/* progress__push-right class was necessary when step started at 0.  It does not negatively impact and can be reverted easily*/}
          <span
            className={`${definitePercent === 0 ? "progress__push-right" : ""}`}
          >
            {definitePercent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
