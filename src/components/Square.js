/* @flow */

import type {PlayerName} from "../playerName";
import React from "react";
import {Board} from "./Board";

export function Square( props: { content: PlayerName, onClick: Board.prototype.handleClick} ) {
    return (
        <button
            className="square"
            onClick={ props.onClick }
        >
            {props.content}
        </button>
    );
}