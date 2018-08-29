// @flow

import React from "react";
import ReactElement from "react/cjs/react.development";

import {GameBoard} from "../GameBoard/GameBoard";
import {winningLines} from "../../winningLines";
import type {PlayerName} from "../../playerName";
import {GameStatus} from "../GameStatus";
import {GameHistory} from "../GameHistory/GameHistory";
import type {SquareContent} from "../../squareContent";
import type {Board} from "../../board";
import type {History} from "../../history";

const player1: PlayerName = "X";
const player2: PlayerName = "O";
const boardSize: number = 9;

type Props = {}

type State = {
    history: History,
    currentPlayer: PlayerName,
    winner: SquareContent,
    stepNumber: number,
}

/**
 * Game React Module. In charge of state and game logic.
 */
export class Game extends React.Component<Props, State> {

    state = {
        history: [{
            move: Game.initialiseBoardSquares(boardSize),
        }],
        currentPlayer: player1,
        winner: null,
        stepNumber: 0,
    };

    /**
     * Initialises array of squares as a Board
     * @param {number} numberOfSquares
     * @returns {Board}
     */
    static initialiseBoardSquares(numberOfSquares: number): Board {
        return Array(numberOfSquares).fill(null)
    }

    /**
     * Checks if Board has any winning lines
     * @param {Board} squares
     * @returns {SquareContent} null | "X" | "Y"
     */
    static calculateWinner(squares: Board): SquareContent {
        for (const line of winningLines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    /**
     * Gets current player from conditional field
     * @param {boolean} condition
     * @returns {PlayerName} "X" | "Y"
     */
    static getPlayer(condition: boolean): PlayerName {
        return condition ? player1 : player2;
    }

    /**
     * Renders the GameStatus React module
     * @returns {ReactElement<typeof GameStatus>}
     */
    renderStatus(): ReactElement<typeof GameStatus> {
        const { winner, currentPlayer } = this.state;
        let status;
        if (winner) {
            status = `Winner is ${ winner }`;
        } else {
            status = `Next player: ${ currentPlayer }`;
        }
        return <GameStatus>{status}</GameStatus>
    }

    /**
     * Renders GameBoard React Component
     * @returns {ReactElement<typeof GameBoard>}
     */
    renderBoard(): ReactElement<typeof GameBoard> {
        const { currentPlayer, winner, history, stepNumber } = this.state;
        const currentSquares = history[stepNumber].move;
        return (
            <GameBoard squares={ currentSquares }
                       currentPlayer={ currentPlayer }
                       onChange={ (squares: Board) => this.onNewMove(squares) }
                       winner={ winner }
            />
        )
    }

    /**
     * Updates state of History, stepNumber, currentPlayer and winner
     * @param {Board} squares
     */
    onNewMove(squares: Board): void {
        const {currentPlayer, history, stepNumber} = this.state;
        const updatedHistory = history.slice(0, stepNumber + 1);
        const nextPlayer = Game.getPlayer(currentPlayer !== player1);
        this.setState({
            history: updatedHistory.concat([{
                move: squares,
            }]),
            stepNumber: stepNumber + 1,
            currentPlayer: nextPlayer,
            winner: Game.calculateWinner(squares)
        });
    }

    /**
     * Renders GameHistory React Component
     * @returns {ReactElement<typeof GameHistory>}
     */
    renderHistory(): ReactElement<typeof GameHistory> {
        return (
            <GameHistory
                history={this.state.history}
                jumpTo={ (move) => this.jumpToMove(move) }
            />
        )
    }

    /**
     * Updates state of stepNumber, currentPlayer and winner value based on step parameter
     * @param {number} step
     */
    jumpToMove(step: number): void {
        const {history} = this.state;
        const winnerUpdate = Game.calculateWinner(history[step].move);
        this.setState({
            stepNumber: step,
            currentPlayer: Game.getPlayer((step % 2) === 0),
            winner: winnerUpdate,
        })
    }

    /**
     * Renders this components React Element
     * @returns {ReactElement<HTMLElement>}
     */
    render(): ReactElement<HTMLElement> {
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

}
