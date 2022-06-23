import React, { useState } from 'react';
import styles from './TextArea.module.css';

export function TextArea(props) {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
    props.onFocus?.();
  }

  function handleBlur() {
    setFocus(false);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    console.log('-------------', value);
    props.onChange(value.slice(0, props.max));
  };

  return (
    <div className={styles.box}>
      <label className={styles.label}>
        <span>{props.label}</span>
        <span className={styles.errorMessage}>
          {!focus && props.dirty ? props.error : null}
        </span>
        <span className={styles.maxChar}>
          {props.value.length}/{props.max}
        </span>
      </label>

      <textarea
        className={styles.textArea}
        placeholder={props.placeholder}
        type={props.type}
        title={props.title}
        rows={props.rows}
        onChange={handleChange}
        name={props.name}
        value={props.value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        required
      />
    </div>
  );
}
