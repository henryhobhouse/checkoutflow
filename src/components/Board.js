/* @flow */

import React from "react";
import {Square} from "./Square";
import type {PlayerName} from "../playerName";
import {Game} from "./Game";

type Props = {
    squares: Array;
    currentPlayer: PlayerName;
    onChange: Game.prototype.onChange;
    winner: null | PlayerName;
};

export class Board extends React.Component<Props> {

    renderSquare(id: string): Square {
        return <Square
            content={this.props.squares[id]}
            onClick={ () => {
                this.handleClick(id)
            }}
        />;
    }

    handleClick(id: number): void {
        const {squares, winner, currentPlayer, onChange} = this.props;
        if (squares[id] || winner) return;
        const newSquares = squares.slice();
        newSquares[id] = currentPlayer;
        onChange(newSquares);
    }

    render() {
        return (
            <div>
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
        )
    };

}
