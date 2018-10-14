import React, { Component } from 'react';

export default class LightButton extends Component {

    render() {
        console.log(this.props);
        return (
                <button disabled={ this.props.disabled } onClick={ this.props.handleClick }>{ this.props.label }</button>
        );
    }
}