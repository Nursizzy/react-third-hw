import styles from './FilledForm.module.css';
import React from 'react';
import logo from '../../logo.svg';

export function FilledForm(props) {
  const data = props.stateData;

  function handleReset(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          style={{ width: '80px', padding: 0 }}
          src={logo}
          className={styles.Applogo}
          alt='logo'
        />
        <h1>
          <span className={styles.header}>
            {data.firstname.toUpperCase()} {data.lastname.toUpperCase()}{' '}
          </span>
          {props.title}
        </h1>
      </div>
      <div className={styles.inputs}>
        <div className={styles.filledForm}>
          <h4>
            <span className={styles.header}>First Name: </span>
            {data.firstname}
          </h4>
          <h4>
            <span className={styles.header}>Last Name: </span>
            {data.lastname}
          </h4>
          <h4>
            <span className={styles.header}>Birth Date: </span>
            {data.birthdate}
          </h4>
          <h4>
            <span className={styles.header}>Phone Number: </span>
            {data.phone}
          </h4>
          <h4>
            <span className={styles.header}>Website: </span>
            <a href={data.url}>{data.url}</a>
          </h4>
          <h4>
            <span className={styles.header}>About: </span>
            {data.about}
          </h4>
          <h4>
            <span className={styles.header}>Techstack: </span>
            {data.techstack}
          </h4>
          <h4>
            <span className={styles.header}>Project: </span>
            {data.project}
          </h4>
        </div>
        <div className={styles.buttons}>
          <button className={styles.resetButton} onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
