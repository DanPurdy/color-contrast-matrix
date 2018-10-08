import React, { Component } from 'react';
import './App.css';

class Item extends Component {


  constructor(props) {
    super(props);

    const {backgroundColor, foregroundColor, includeStyle} = props;

    this.state = {};
    if (includeStyle) {
      if (backgroundColor !== foregroundColor) {
        this.state = {
          style: {
            backgroundColor: `#${backgroundColor}`,
            color: `#${foregroundColor}`,
          }
        }
      } else {
        this.state = {
          style : {
            backgroundColor: '#FFFFFF',
            color: '#FFFFFF',
          }
        }
      }
    }
  }

  render() {
    const {text} = this.props;
    const {style} = this.state;

    return (
      <div className="item" style={style}>
        <div className="inner-item">{text}</div>
      </div>
    );
  }
}

export default Item;
