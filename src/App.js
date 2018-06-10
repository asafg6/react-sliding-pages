import React, { Component } from 'react';
import './App.css';
import Page from './page';
import Nav from './nav';

class App extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    let buttons = [];
    for (let i = 0; i < 4; i++) {
      let button = <button key={i.toString()}>{i}</button>;
      buttons.push(button);
    }
    return (
      <div className="App">
        <Nav buttons={buttons}>
          <Page>
            <div className="page" style={{ backgroundColor: 'green' }}>
              bla1
            </div>
          </Page>
          <Page>
            <div className="page" style={{ backgroundColor: 'red' }}>
              bla1
            </div>
          </Page>
          <Page>
            <div className="page" style={{ backgroundColor: 'blue' }}>
              bla1
            </div>
          </Page>
          <Page>
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
