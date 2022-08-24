import React, { Dispatch, SetStateAction } from 'react';

import { createContext, useContext, useState } from 'react';

import { LightTheme, ThemeInterface } from '@better/themes';

export interface ThemeContextInterface {
  theme: ThemeInterface;
  setTheme?: Dispatch<SetStateAction<ThemeInterface>>;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: LightTheme,
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ThemeInterface>(LightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextInterface => useContext(ThemeContext);
