import {Game} from "./Game";
import React from "react";

describe("Game", () => {

    describe("Initialisation of squares", () => {

        let squares;
        let amountOfSquares;

        beforeAll( () => {
            amountOfSquares = 5;
            squares = Game.initialiseBoardSquares(amountOfSquares);
        });

        test("Will initialise Board Squares", () => {
            expect(Array.isArray(squares)).toBe(true, "Squares object is not an Array");
            expect(squares.length).toBe(amountOfSquares, `Not ${amountOfSquares} squares in the Array`);
        });

        test("Squares initial value is null", () => {
            squares.forEach( (square, index) => {
                expect(square).toBe(null, `#${index} square is not null`);
            })
        });

    });

    test("Will return player as winner with winning line on board", () => {
        const mockBoard = [ null, "X", "O",
                            null, "X", "X",
                            "O", "X", "O" ];
        const winner = Game.calculateWinner(mockBoard);
        expect(winner).toBe("X", "'X' was not returned as winner");
    });

    test("Will return null when no winning line on board", () => {
        const mockBoard = [ null, "O", "X",
                            "O", null, "X",
                            "X", "O", null ];
        const winner = Game.calculateWinner(mockBoard);
        expect(winner).toBe(null, "A winner was incorrectly declared");
    });

    test("Should get player one 'X'", () => {
        const player = Game.getPlayer(true);
        expect(player).toBe("X", "player one 'X' not returned with true condition");
    });

    test("Should get player two 'O'", () => {
        const player = Game.getPlayer(false);
        expect(player).toBe("O", "player two '2' not returned with false condition");
    });

});
