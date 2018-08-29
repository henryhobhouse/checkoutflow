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
    })

});
