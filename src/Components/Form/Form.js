import React from 'react';
import styles from './Form.module.css';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import logo from '../../logo.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: '7',
    };
  }
  render() {
    return (
      <>
        <div className={styles.title}>
          <h1>{this.props.title}</h1>
        </div>
        <form className={styles.inputs}>
          <div className={styles.fields}>
            <div className={styles.inputFields}>
              <Input
                label='Name'
                type='text'
                placeholder='Ivan'
                title='Enter your name'
              />
              <Input
                label='Last Name'
                type='text'
                placeholder='Ivanov'
                title='Enter your last name'
              />
              <Input
                label='Birth Date'
                type='date'
                data-date-format='DD MMMM YYYY'
                title='Enter your birth date'
              />
              <Input
                label='Phone number'
                type='tel'
                placeholder='7-7777-77-77'
                title='Enter your phone number'
              />
              <Input
                label='Website'
                type='text'
                placeholder='github.com/IvanIvanov'
                title='Provide link to your website'
              />
            </div>
            <div className={styles.textArea}>
              <TextArea
                label='About you'
                type='text'
                title='Max 7 rows'
                rows={this.state.rows}
              />
              <TextArea
                label='Your technology stack'
                type='text'
                title='Max 7 rows'
                rows={this.state.rows}
              />
              <TextArea
                label='Last project description'
                type='text'
                title='Max 7 rows'
                rows={this.state.rows}
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <input type='submit' value='Submit' title='submit form' />
            <input type='reset' value='Cancel' title='reset all input fields' />
          </div>
          <div className={styles.image}>
            <img src={logo} className={styles.Applogo} alt='logo' />
          </div>
        </form>
      </>
    );
  }
}

export default Form;
