import React, { Component } from 'react';
import './App.css';

import Item from './Item.js';

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
        <main className="container">
          <div className="column">
            {colors.map((colorY, indexY) => (
              <Item text={colors[indexY - 1]} />
            ))}
          </div>
          {colors.map((colorY, indexY) => (
            <div className="column">
              {colors.map((colorX, indexX) => {
                if (indexX === 0) { return ([
                <Item text={colorY} key={`${colorY}-title`} />,
                <Item includeStyle text={colorY} key={`${colorY}-${colorX}`} backgroundColor={colorX} foregroundColor={colorY} />,
              ])}
              return (
                <Item includeStyle key={`${colorY}-${colorX}`} text={colorY} backgroundColor={colorX} foregroundColor={colorY} />
              )})}
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
