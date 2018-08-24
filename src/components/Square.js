/* @flow */

import type {PlayerName} from "../playerName";
import React from "react";
import {Board} from "./Board";

type Props = {
    content: PlayerName,
    onClick: Board.prototype.handleClick
}

export function Square(props: Props) {
    return (
        <button
            className="square"
            onClick={ props.onClick }
        >
            {props.content}
        </button>
    );
}