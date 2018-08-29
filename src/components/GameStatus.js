// @flow

import React from "react";

type Props = {
    children: string,
}

export function GameStatus(props: Props) {

    return (
        <div className="status">
            {props.children}
        </div>
    );

}