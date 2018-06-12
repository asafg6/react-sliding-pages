import React, { Component } from 'react';

const hash = () => window.location.hash.slice(1);

class Nav extends Component {

    constructor(props) {
        super(props);
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let left = props.children.map(o => this.width);
        if (left.length > 0 ) {
            left[0] = 0;
        }
        this.state = {page: 0, left: left};
        this.pages = {};
    }

    move(page) {
        const left = this.state.left.slice();
        if (page >= left.length) {
          page = 0;
        }
        for (let i = 0; i < left.length; i++ ) {
          if (i < page) {
            left[i] = -this.width;
          } else if (i == page) {
            left[i] = 0;
          } else {
            left[i] = this.width;
          }
        }    
        this.setState({left: left, page: page})
      }
      
    componentDidMount() {
        this.move(this.pages[hash()]);
    }

    componentWillMount() {
        window.onhashchange = (e) => {
            const i = e.newURL.indexOf('#');
            const hash = e.newURL.slice(i + 1);
            console.log(hash);
            this.move(this.pages[hash]);
        };
    }

    render() {
        const pageElements = React.Children.map(this.props.children, (page, idx) => {
            const element = React.cloneElement(page, { left: this.state.left[idx] }); 
            this.pages[element.props.path.slice(1)] = idx;
            return element;
        })
        return (
            <div>
                {pageElements}
            </div>
        );
    }

}

export default Nav;