import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider, LabelsProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <LabelsProvider>
          <App />
        </LabelsProvider>
      </NotesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
