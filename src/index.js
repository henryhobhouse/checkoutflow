import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Game} from "./components/Game/Game";

/**
 * Entry point to code base and renders the Game React Component
 */
ReactDOM.render(
    <Game />,
    document.getElementById("root") // eslint-disable-line
);
