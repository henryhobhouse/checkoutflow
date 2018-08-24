import type {Board} from "./board";

type Move = {
    squares: Board
}

export type History = {
    Array<Move>
}