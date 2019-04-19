import React from 'react';
import Button from '../Button/Button';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <Button className="orange">{this.props.buttonText}</Button>
      </div>
    );
  }
}

export default Card;