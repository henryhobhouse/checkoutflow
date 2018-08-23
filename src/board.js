/* @flow */

import React from "react";
import {Square} from "./square";
import {playerName} from "./player-name";

type Props = {
    player: playerName;
}

export class Board extends React.Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    renderSquare(id: number) {
        return <Square content={this.state.squares[id]} />;
    }

    render() {
        const status = `Next player: ${this.props.player}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}
