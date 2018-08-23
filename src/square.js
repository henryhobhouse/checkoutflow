/* @flow */

import {playerName} from "./player-name";
import React from "react";

type Props = {
    content: playerName,
}

export class Square extends React.Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <button
                className="square"
                onClick={ () => this.changeState() }
            >
                {this.state.value}
            </button>
        );
    }

    changeState() {
        this.setState({value: this.props.squareValue})
    }
}