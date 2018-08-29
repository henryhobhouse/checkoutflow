// @flow

import React from "react";
import type {History} from "../../history";

type Props = {
    history: History;
    jumpTo: (number) => void;
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