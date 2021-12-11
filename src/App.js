import "./styles.css";
import React from "react";
import SelectView from "./components/SelectView";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          className="main_logo"
          src={process.env.PUBLIC_URL + "/data/img/main_logo.png"}
        />
      </div>

      <React.StrictMode>
        <SelectView />
      </React.StrictMode>
    </div>
  );
}
