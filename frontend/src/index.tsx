import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FormFindUser } from "./components/forms/FormFindUsers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormFindUser />
  </React.StrictMode>
);
