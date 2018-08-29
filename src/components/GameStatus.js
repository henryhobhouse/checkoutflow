// @flow

import React from "react";
import ReactElement from "react/cjs/react.development";

type Props = {
    /** {string} undefined child property passed by Game React Module */
    children: string,
}

/**
 * GameStatus Stateless React Component. Return ReactElement containing property as passed by GameBoard
 * @param {Props} props
 * @returns {ReactElement<HTMLElement>}
 */
export function GameStatus(props: Props): ReactElement<HTMLElement> {

    return (
        <div className="status">
            {props.children}
        </div>
    );

}