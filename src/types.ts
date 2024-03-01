import { SetStateAction } from "react";

export type IterableStringType = {
  [key: string]: string;
};

export type IterableType = {
  [key: string]: string | number;
};

export type FormContext = {
  inputs: IterableType;
  setInputs: React.Dispatch<SetStateAction<IterableType>>;
};

export type ErrorContext = {
  errors: IterableStringType;
  setErrors: React.Dispatch<SetStateAction<IterableStringType>>;
};
