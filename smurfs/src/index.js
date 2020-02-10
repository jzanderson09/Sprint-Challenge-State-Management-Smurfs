import React from "react";
import ReactDOM from "react-dom";
import { smurfData, SmurfContext } from './contexts/SmurfContext';
import "./index.css";
import App from "./components/App";

ReactDOM.render(
<SmurfContext.Provider value={smurfData}>
    <App />
</SmurfContext.Provider>, document.getElementById("root"));
