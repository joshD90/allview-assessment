import React, { FC, ReactNode } from "react";
import "./button.css";

type Props = {
  handleClick: () => unknown;
  children: ReactNode;
  secondary?: boolean;
};

const Button: FC<Props> = ({ handleClick, children, secondary }) => {
  const doClick = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <button onClick={doClick} className={secondary ? "secondary" : "primary"}>
      {children}
    </button>
  );
};

export default Button;
