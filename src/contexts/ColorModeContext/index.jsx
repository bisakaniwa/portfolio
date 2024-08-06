import { createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { getDesignTokens } from "./palettes";

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const useColorMode = () => {
   const contextValue = useContext(ColorModeContext);

   if (!contextValue) {
      throw new Error('"useColorMode" must be called from within a Provider.');
   }

   return contextValue;
};

export const ColorModeProvider = ({ children }) => {
   const colorModePreference = useMediaQuery('(prefers-color-scheme: light)');
   const [mode, setMode] = useState('light');
   const colorMode = useMemo(() => ({
      toggleColorMode: () => {
         setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
      }
   }), []);

   const selectedTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={selectedTheme}>
            {children}
         </ThemeProvider>
      </ColorModeContext.Provider>
   )
}