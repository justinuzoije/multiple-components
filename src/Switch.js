import React from 'react';

export default class Switch extends React.Component {
  render() {
    let imageUrl;
    let buttonLabel;
    if (this.props.on) {
      imageUrl = 'images/bulb-on.png';
      buttonLabel = 'Off';
    } else {
      imageUrl = 'images/bulb-off.png';
      buttonLabel = 'On';
    }
    return (
      <div>
        <img src={imageUrl} width="100" alt={buttonLabel}/>
        <button onClick={this.props.toggle}>
          {buttonLabel}
        </button>
      </div>
    );
  }
}
