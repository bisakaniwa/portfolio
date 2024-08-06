import React from "react";
import "./App.css";
import { ColorModeProvider } from "./contexts/ColorModeContext";
import { PresentationRoutes } from "./routes";

export default function App() {
   return (
      <ColorModeProvider>
         <PresentationRoutes />
      </ColorModeProvider>
   )
}