import React, { PropsWithChildren, useState, createContext } from 'react';
 
export const AppContext = createContext({
  length: 5,
  allowDuplicateLetters: false,
  setLength: (length: number) => {},
  setAllowDuplicateLetters: (allowDuplicateLetters: boolean) => {}
});

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [length, setLength] = useState(5);
  const [allowDuplicateLetters, setAllowDuplicateLetters] = useState(false);

  return (
    <AppContext.Provider value={{ length, allowDuplicateLetters, setLength, setAllowDuplicateLetters }}>
      {children}
    </AppContext.Provider>
  );
};

