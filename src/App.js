import React, { Component } from 'react';
import './App.css';
import Page from './page';
import Nav from './nav';
import Link from './link';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/green" >
            <button>green</button>
          </Link>
          <Link to="/red" >
            <button>red</button>
          </Link>
          <Link to="/blue" >
            <button>blue</button>
          </Link>
          <Link to="/brown" >
            <button>brown</button>
          </Link>
        </div>
        <Nav>
          <Page path="/green">
            <div className="page" style={{ backgroundColor: 'green' }}>
              bla1
            </div>
          </Page>
          <Page path="/red">
            <div className="page" style={{ backgroundColor: 'red' }}>
              bla1
            </div>
          </Page>
          <Page path="/blue">
            <div className="page" style={{ backgroundColor: 'blue' }}>
              bla1
            </div>
          </Page>
          <Page path="/brown">
            <div className="page" style={{ backgroundColor: 'brown' }}>
              bla1
            </div>
          </Page>
        </Nav>
        
      </div>
    );
  }
}

export default App;
