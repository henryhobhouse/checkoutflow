/* @flow */

import type {PlayerName} from "../playerName";
import React from "react";

type Props = {
    content: PlayerName,
    onClick: () => void,
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