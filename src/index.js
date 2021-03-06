import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NavProvider } from "./context/nav_context";
import { FilterProvider } from "./context/filter_context";
import { PlayersProvider } from "./context/players_context";

ReactDOM.render(
  <NavProvider>
    <PlayersProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </PlayersProvider>
  </NavProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
