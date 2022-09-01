import React from "react";
import ReactDOM from "react-dom/client";
// import Map from './reactjsDasar/Map';
// import Lifecycle from './reactjsDasar/Lifecycle'

import "bootstrap/dist/css/bootstrap.min.css";
import Crud from "./crud";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);
