import React from "react";
import type {PlayerName} from "../playerName";

type Props = {
    winner: null | PlayerName,
}

export class BoardStatus extends React.Component<Props> {

    constructor(props) {
        super(props)
    }

    render(): void {
        return <div className="status">{this.props.children}</div>
    }

}