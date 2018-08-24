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

export function Board(props: Props) {

    function renderSquare(id: string): Square {
        return <Square
            content={props.squares[id]}
            onClick={ () => {
                handleClick(id)
            }}
        />;
    }

    function handleClick(id): void {
        if (props.squares[id] || props.winner) return;
        const squares = props.squares.slice();
        squares[id] = props.currentPlayer;
        props.onChange(squares);
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

}
