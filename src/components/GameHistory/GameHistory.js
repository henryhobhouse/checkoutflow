// @flow

import React from "react";
import type {History} from "../../history";
import ReactElement from "react/cjs/react.development";


type Props = {
    /** Array of Boards that reflect historic moves */
    history: History;
    /** Function passed by Game that is called upon a 'Go to...' being clicked */
    jumpTo: (number) => void;
}

/**
 * GameHistory React Module. Renders button options to take game back to previous step.
 */
export class GameHistory extends React.Component<Props> {

    /**
     * Renders this components History in the form of a button list linked to each move step
     * @returns {any[]}
     */
    render(): ReactElement<HTMLElement> {
        const {history, jumpTo} = this.props;
        return history.map( (step, move) => {
            const description = !move ? `Go to game start` : `Go to move #${move}`;
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            )
        })
    }

}