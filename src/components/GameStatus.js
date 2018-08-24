import React from "react";
import type {PlayerName} from "../playerName";

type Props = {
    children: PlayerName,
}

export function GameStatus(props: Props) {

    return (
        <div className="status">
            {props.children}
        </div>
    );

}