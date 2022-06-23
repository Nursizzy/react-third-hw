import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button className={'button'} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
