import React, { Component } from 'react';


class Link extends Component {

    go() {
        window.location.hash = this.props.to.slice(1);
    }

    render() {
        return (
            <i onClick={() => this.go()}>
                {this.props.children}
            </i>

        );
    }

}

export default Link;