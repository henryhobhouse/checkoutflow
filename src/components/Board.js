/* @flow */

import React from "react";
import {Square} from "./Square";
import type {PlayerName} from "../playerName";
import {Game} from "./Game";

type Props = {
    player1: string;
    player2: string;
    winner: null | PlayerName;
    squares: Array;
    player1IsNext: boolean;
    onChange: Game.prototype.onChange;
};

export class Board extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    renderSquare(id: string): Square {
        return <Square
            content={this.props.squares[id]}
            onClick={ () => {
                if (!this.props.squares[id]) {
                    this.handleClick(id)
                }
            }}
        />;
    }

    handleClick(id): void {
        const squares = this.props.squares.slice();
        squares[id] = this.getPlayer();
        this.props.onChange(squares);
    }

    getPlayer(): PlayerName {
        return this.props.player1IsNext ? this.props.player1 : this.props.player2;
    }

    render(): void {
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
        );
    }

}
