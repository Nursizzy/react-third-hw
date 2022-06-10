import React from 'react';
import styles from './TextArea.module.css';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={styles.box}>
          <label className={styles.label}>{this.props.label}</label>
          <textarea
            className={'textArea'}
            type={this.props.type}
            value={this.props.value}
            name={this.props.label}
            placeholder={this.props.placeholder}
            rows={this.props.rows}
            cols={this.props.cols}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        </div>
      </>
    );
  }
}

export default TextArea;
