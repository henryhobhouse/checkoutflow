/* @flow */

import * as React from "react";
import {Square} from "./Square";
import type {PlayerName} from "../playerName";
import type {SquareValues} from "../squareValues";

type Props = {
    squares: Array<SquareValues>;
    currentPlayer: PlayerName;
    onChange: (SquareValues) => void;
    winner: SquareValues;
};

export class GameBoard extends React.Component<Props> {

    renderSquare(id: number) {
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
