/* @flow */

import React from "react";
import {Game} from "./Game";

type Props = {
    history: Array;
    jumpTo: Game.prototype.jumpTo;
}

export class GameHistory extends React.Component<Props> {

    render() {
        const {history, jumpTo} = this.props;
        return history.map( (step, move) => {
            const description = move ? `Go to move #${move}` : `Go to game start`;
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            )
        })
    }

}