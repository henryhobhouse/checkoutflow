/* @flow */

import React from "react";
import {Board} from "./Board";
import {winningLines} from "../winningLines";
import type {PlayerName} from "../playerName";
import {BoardStatus} from "./BoardStatus";

export class Game extends React.Component {

    player1 = "X";
    player2 = "O";

    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            winner: null,
            player1IsNext: true,
        }
    }

    getPlayer(): PlayerName {
        return this.state.player1IsNext ? this.player1 : this.player2;
    }

    render() {
        let status;
        if (this.state.winner) {
            status = `Winner is ${this.state.winner}`;
        } else {
            status = `Next player: ${this.getPlayer()}`;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board player1={this.player1}
                           player2={this.player2}
                           winner={ this.state.winner }
                           squares={ this.state.squares }
                           player1IsNext={ this.state.player1IsNext }
                           onChange={ (squares) => this.onChange(squares) }
                    />
                </div>
                <div className="game-info">
                    <BoardStatus>{status}</BoardStatus>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

    onChange(squares) {
        console.log(squares);
        this.setState({
            squares: squares,
            player1IsNext: !this.state.player1IsNext,
            winner: this.calculateWinner(squares)
        });
        if (this.state.winner) {
            this.update
        }
    }

    calculateWinner(squares): null | PlayerName {
        for (const line of winningLines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log("true");
                return squares[a];
            }
        }
        return null;
    }
}
