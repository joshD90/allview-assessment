import { useState, createContext, ReactNode, FC } from "react";
import { FormContext, IterableType } from "../types";

export const formStateContext = createContext<FormContext>({
  inputs: {},
  setInputs: () => null,
});

type Props = { children: ReactNode };

export const FormStateContextProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<IterableType>({});

  return (
    <formStateContext.Provider value={{ inputs: state, setInputs: setState }}>
      {children}
    </formStateContext.Provider>
  );
};
