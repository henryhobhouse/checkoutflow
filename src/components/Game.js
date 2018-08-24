/* @flow */

import React from "react";
import {GameBoard} from "./GameBoard";
import {winningLines} from "../winningLines";
import type {PlayerName} from "../playerName";
import {GameStatus} from "./GameStatus";
import {GameHistory} from "./GameHistory";
import type {SquareValues} from "../squareValues";
import type {Board} from "../board";

const player1: PlayerName = "X";
const player2: PlayerName = "O";
const boardSize: number = 9;

type Props = {}

type State = {
    history: Array<Board>,
    currentPlayer: PlayerName,
    winner: SquareValues,
    stepNumber: number,
}

export class Game extends React.Component<Props, State> {


    state = {
        history: [{
            move: Game.initialiseSquares(boardSize),
        }],
        currentPlayer: player1,
        winner: null,
        stepNumber: 0,
    };

    static initialiseSquares(numberOfSquares: number): Board {
        return Array(numberOfSquares).fill(null)
    }

    static calculateWinner(squares: Array<SquareValues>): SquareValues {
        for (const line of winningLines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    static getPlayer(condition: boolean): PlayerName {
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
        const currentSquares = history[stepNumber].move;
        return (
            <GameBoard squares={ currentSquares }
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

    jumpTo(step: number): void {
        const {history} = this.state;
        const winnerUpdate = Game.calculateWinner(history[step].move);
        this.setState({
            stepNumber: step,
            currentPlayer: Game.getPlayer((step % 2) === 0),
            winner: winnerUpdate,
        })
    }

    onChange(squares: Board): void {
        const {currentPlayer, history, stepNumber} = this.state;
        const updatedHistory = history.slice(0, stepNumber + 1);
        const nextPlayer = Game.getPlayer(currentPlayer !== player1);
        this.setState({
            history: updatedHistory.concat([{
                move: squares,
            }]),
            stepNumber: history.length,
            currentPlayer: nextPlayer,
            winner: Game.calculateWinner(squares)
        });
    }

}
