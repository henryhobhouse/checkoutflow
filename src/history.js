import type {Board} from "./board";

type Step = {
    move: Board
}

export type History = Array<Step>;
