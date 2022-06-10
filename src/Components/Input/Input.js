import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={styles.inputForm}>
          <label className={'label'}> {this.props.label}</label>
          <input
            className={'input'}
            type={this.props.type}
            value={this.props.value}
            title={this.props.title}
            placeholder={this.props.placeholder}
          />
        </div>
      </>
    );
  }
}

export default Input;
