export const getDesignTokens = (mode) => ({
   palette: {
      mode,
      ...(mode === 'light'
         ? { // light mode values
            background: {
               default: "#b0dde4"
            }
         }
         : { // dark mode values
            background: {
               default: "#0c1a1d",
            }
         }
      )
   }
})