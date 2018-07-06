import React, { Component } from 'react';


class Nav extends Component {

    constructor(props) {
        super(props);
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let left = props.children.map(o => this.width);
        if (left.length > 0 ) {
            left[0] = 0;
        }
        this.state = {page: 0, left: left, from: left};
        this.pages = {};
        this.eventer = new MoveEvent();
    }

    move(page) {
        const left = this.state.left.slice();
        const from = left.slice();
        if (page >= left.length) {
          page = 0;
        }
        for (let i = 0; i < left.length; i++ ) {
          if (i < page) {
            left[i] = -this.width;
          } else if (i === page) {
            left[i] = 0;
          } else {
            left[i] = this.width;
          }
        }    
        this.setState({left: left, page: page, from: from});
        this.eventer.fire();
      }
      
    componentDidMount() {
        this.move(this.pages[window.location.hash.slice(1)]);
    }

    componentWillMount() {
        window.onhashchange = (e) => {
            const i = e.newURL.indexOf('#');
            const hash = e.newURL.slice(i + 1);
            this.move(this.pages[hash]);
            this.eventer.fire();
        };
    }


    render() {
        const pageElements = React.Children.map(this.props.children, (page, idx) => {
            const element = React.cloneElement(page, { left: this.state.left[idx], from: this.state.from[idx], eventer:this.eventer }); 
            this.pages[element.props.path.slice(1)] = idx;
            return element;
        });
        return (
            <div>
                {pageElements}
            </div>
        );
    }

}


class MoveEvent {

    constructor() {
        this.listeners = [];
    }

    register(f) {
        this.listeners.push(f);
    }

    unregister(f) {
        this.listeners.splice(this.listeners.indexOf(f), 1);
    }

    fire(params) {
        this.listeners.forEach((listener) => {
            listener(params);
        });

    }
}

export default Nav;

