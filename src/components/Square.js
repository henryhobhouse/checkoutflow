// @flow

import React from "react";
import type {SquareContent} from "../squareContent";

type Props = {
    content: SquareContent,
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