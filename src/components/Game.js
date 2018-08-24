/* @flow */

import React from "react";
import {Board} from "./Board";
import {winningLines} from "../winningLines";
import type {PlayerName} from "../playerName";
import {GameStatus} from "./GameStatus";

const player1: PlayerName = "X";
const player2: PlayerName = "O";
const boardSize: number = 9;

export class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            squares: Game.initialiseSquares(boardSize),
            currentPlayer: player1,
            winner: null,
        }
    }

    static initialiseSquares(numberOfSquares: number) {
        return Array(numberOfSquares).fill(null)
    }

    static calculateWinner(squares): null | PlayerName {
        for (const line of winningLines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    renderStatus() {
        const { winner, currentPlayer } = this.state;
        let status;
        if (winner) {
            status = `Winner is ${ winner }`;
        } else {
            status = `Next player: ${ currentPlayer }`;
        }
        return <GameStatus>{status}</GameStatus>
    }

    renderBoard() {
        const { squares, currentPlayer, winner } = this.state;
        return (
            <Board squares={ squares }
                   currentPlayer={ currentPlayer }
                   onChange={ (squares) => this.onChange(squares) }
                   winner={ winner }
            />
        )
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {this.renderBoard()}
                </div>
                <div className="game-info">
                    {this.renderStatus()}
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

    onChange(squares) {
        const nextPlayer = this.state.currentPlayer === player1 ? player2 : player1;
        this.setState({
            squares: squares,
            currentPlayer: nextPlayer,
            winner: Game.calculateWinner(squares)
        });
        if (this.state.winner) {}
    }

}
