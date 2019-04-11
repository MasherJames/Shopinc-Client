import React from "react";
import AppRoutes from "./routes";
import { AppState } from "./context";

const App = () => {
  return (
    <AppState>
      <AppRoutes />
    </AppState>
  );
};

export default App;
