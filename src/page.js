
import React, { Component } from 'react';


class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            left: 0
        }
    }


    render() {
        return (
            <div style={{
                width: '100vw', 
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                transform: 'translateX('+ this.props.left + 'px)',
                animationTimingFunction: 'ease-in',
                zIndex: -20,
                transition: 'transform .8s ease-in-out'
            }}>
                {this.props.children}
            </div>
        );

    }

}

export default Page;
