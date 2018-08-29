// @flow

import React from "react";
import ReactElement from "react/cjs/react.development";
import type {SquareContent} from "../squareContent";

type Props = {
    content: SquareContent,
    onClick: () => void,
}

export function Square(props: Props): ReactElement<HTMLElement> {

    return (
        <button
            className="square"
            onClick={ props.onClick }
        >
            {props.content}
        </button>
    );

}