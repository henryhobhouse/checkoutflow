/* @flow */

import React from "react";
import type {Board} from "../board";

type Props = {
    history: Array<Board>;
    jumpTo: (Board) => void;
}

export class GameHistory extends React.Component<Props> {

    render() {
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