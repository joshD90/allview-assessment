import { useState, createContext, ReactNode, FC } from "react";
import { ErrorContext, IterableStringType } from "../types";

export const formErrorContext = createContext<ErrorContext>({
  errors: {},
  setErrors: () => null,
});

type Props = { children: ReactNode };

export const FormErrorContextProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<IterableStringType>({});

  return (
    <formErrorContext.Provider value={{ errors: state, setErrors: setState }}>
      {children}
    </formErrorContext.Provider>
  );
};
