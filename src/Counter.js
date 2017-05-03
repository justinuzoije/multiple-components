
import React from 'react';

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>-</button>
        {this.props.count}
        <button onClick={this.props.subtract}>+</button>
      </div>
    );
  }
}
