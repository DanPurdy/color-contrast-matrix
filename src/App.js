import React, { Component } from 'react';
import './App.css';

import colors from './lib/colors.js';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      colors,
    }
  }

  render() {
    const {colors} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Color contrast matrix</h1>
        </header>
        <main>
          {colors.map(colorY => (
            <div className="row" key={colorY}>
              {colors.map((colorX, index) => {
                if (index === 0) {
                  return ([
                    <div className="">{colorX}</div>,
                    <div className="item" style={{backgroundColor: `#${colorX}`, color: `#${colorY}`}} key={`${colorY}-${colorX}`}>
                      <div>{colorY}</div>
                    </div>,
                  ])
                }

                return (
                  <div className="item" style={{backgroundColor: `#${colorX}`, color: `#${colorY}`}} key={`${colorY}-${colorX}`}>
                    <div>{colorY}</div>
                  </div>
                )
              })}
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
