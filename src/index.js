import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello.js";

ReactDOM.render(<Hello name={["HMU", "GoDaddy"]} special={true}/>, document.getElementById("app"));
