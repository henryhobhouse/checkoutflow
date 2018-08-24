/* @flow */

import React from "react";
import {Board} from "./Board";
import {winningLines} from "../winningLines";
import type {PlayerName} from "../playerName";
import {GameStatus} from "./GameStatus";
import {GameHistory} from "./GameHistory";

const player1: PlayerName = "X";
const player2: PlayerName = "O";
const boardSize: number = 9;

export class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            history: [{
                squares: Game.initialiseSquares(boardSize),
            }],
            currentPlayer: player1,
            winner: null,
            stepNumber: 0,
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

    static getPlayer(condition) {
        return condition ? player1 : player2;
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
        const { currentPlayer, winner, history, stepNumber } = this.state;
        const currentSquares = history[stepNumber].squares;
        return (
            <Board squares={ currentSquares }
                   currentPlayer={ currentPlayer }
                   onChange={ (squares) => this.onChange(squares) }
                   winner={ winner }
            />
        )
    }

    renderHistory() {
        return (
            <GameHistory
                history={this.state.history}
                jumpTo={ (move) => this.jumpTo(move) }
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
                    <ol>{this.renderHistory()}</ol>
                </div>
            </div>
        );
    }

    jumpTo(step) {
        const {history, winner} = this.state;
        const winnerUpdate = step === history.length - 1 ? winner : null;
        this.setState({
            stepNumber: step,
            currentPlayer: Game.getPlayer((step % 2) === 0),
            winner: winnerUpdate,
        })
    }

    onChange(squares) {
        const {currentPlayer} = this.state;
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const nextPlayer = Game.getPlayer(currentPlayer !== player1);
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            currentPlayer: nextPlayer,
            winner: Game.calculateWinner(squares)
        });
    }

}
