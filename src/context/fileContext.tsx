import { useState, createContext, ReactNode, FC, SetStateAction } from "react";

export const fileContext = createContext<{
  files: File[];
  setFiles: React.Dispatch<SetStateAction<File[]>>;
}>({
  files: [],
  setFiles: () => null, //set to a blank function as cant use state until inside FC
});

type Props = { children: ReactNode };

export const FileContextProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<File[]>([]);

  return (
    <fileContext.Provider value={{ files: state, setFiles: setState }}>
      {children}
    </fileContext.Provider>
  );
};
