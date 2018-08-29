// @flow

import * as React from "react";
import {Square} from "../Square";
import type {PlayerName} from "../../playerName";
import type {SquareContent} from "../../squareContent";
import type {Board} from "../../board";
import ReactElement from "react/cjs/react.development";

type Props = {
    /** Array of squares that holds SquareContent */
    squares: Board;
    /** Current Player "X" or "O" */
    currentPlayer: PlayerName;
    /** Function passed by Game to be called upon when square is clicked */
    onChange: (Board) => void;
    /** Winner. Initialises on null */
    winner: SquareContent;
};

/**
 * GameBoard React Module. Renders all Squares with values as passed to it by Game
 */
export class GameBoard extends React.Component<Props> {

    /**
     * Renders Square React Component
     * @param {number} id
     * @returns {ReactElement<typeof Square>}
     */
    renderSquare(id: number): ReactElement<typeof Square> {
        return <Square
            content={this.props.squares[id]}
            onClick={ () => {
                this.handleClick(id)
            }}
        />;
    }

    /**
     * Registers clicks from the Square component and pushes cloned Board to onChange function for Game component to
     * process
     * @param id
     */
    handleClick(id: number): void {
        const {squares, winner, currentPlayer, onChange} = this.props;
        if (squares[id] || winner) return;
        const newSquares: Board = squares.slice();
        newSquares[id] = currentPlayer;
        onChange(newSquares);
    }

    /**
     * Renders this components Board
     * @returns {ReactElement<HTMLElement>}
     */
    render(): ReactElement<HTMLElement> {
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
