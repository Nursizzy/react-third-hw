import React, { useState } from 'react';
import styles from './Form.module.css';
import logo from '../../logo.svg';
import { Input, MobilePhoneInput } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { SubmitButton } from '../Buttons/SubmitButton/SubmitButton';
import { ResetButton } from '../Buttons/ResetButton/ResetButton';
import { validation } from '../../Validation';

const initialValues = {
  firstname: '',
  lastname: '',
  birthdate: '',
  phone: '',
  url: 'https://',
  about: '',
  techstack: '',
  project: '',
};

const dirtyInitial = Object.fromEntries(
  Object.keys(initialValues).map((key) => [key, false])
);

export function Form(props) {
  const [values, setValues] = useState(initialValues);
  const [dirty, setDirty] = useState(dirtyInitial);

  function setValue(name, value) {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleTouchedInput(name) {
    setDirty((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleOnChange(name, value) {
    setValue(name, value.trim());
  }

  function handleNameChange(name, value) {
    if (value === '') {
      setValue(name, '');
    } else {
      const result = value[0].toUpperCase() + value.slice(1).toLowerCase();
      setValue(name, result);
    }
  }

  function handleOnChangeTextArea(name, value) {
    setValue(name, value);
  }

  function handleSave(e) {
    e.preventDefault();

    const isValid = Object.keys(values)
      .filter((key) => key in validation)
      .every((key) => validation[key](values[key]) === null);

    console.log(values);
    console.log(Object.keys(values));
    console.log(Object.keys(values).filter((key) => key in validation));
    console.log(isValid);

    if (isValid) {
      props.onSubmit(values);
    }
  }

  function handleReset(e) {
    e.preventDefault();

    setValues(initialValues);
    setDirty(dirtyInitial);
  }

  return (
    <>
      <div className={styles.title}>
        <h1>
          <span className={styles.header}>APPLICANT </span>
          {props.title}
        </h1>
      </div>
      <form className={styles.inputs} onSubmit={handleSave}>
        <div className={styles.fields}>
          <div className={styles.inputFields}>
            <Input
              label='Name'
              name='firstname'
              type='text'
              placeholder='Ivan'
              title='Enter your name'
              value={values.firstname}
              onChange={(value) => handleNameChange('firstname', value)}
              // onBlur={(value) => handleOnBlur('firstname', value)}
              error={validation.firstname(values.firstname)}
              dirty={dirty.firstname}
              onFocus={() => handleTouchedInput('firstname')}
            />
            <Input
              label='Last Name'
              name='lastname'
              type='text'
              placeholder='Ivanov'
              title='Enter your last name'
              value={values.lastname}
              onChange={(value) => handleNameChange('lastname', value)}
              error={validation.lastname(values.lastname)}
              dirty={dirty.lastname}
              onFocus={() => handleTouchedInput('lastname')}
            />
            <Input
              label='Birth Date'
              type='date'
              name='birthdate'
              data-date-format='DD MMMM YYYY'
              title='Enter your birth date'
              value={values.birthdate}
              onChange={(value) => handleOnChange('birthdate', value)}
              onFocus={() => handleTouchedInput('birthdate')}
              // onBlur={(value) => handleOnBlur('birthdate', value)}
              error={validation.birthdate(values.birthdate)}
              dirty={dirty.birthdate}
            />
            <MobilePhoneInput
              label='Phone number'
              id='telinput'
              type='tel'
              name='phone'
              placeholder='7-(777)-777-77-77'
              mask='7-(777)-777-77-77'
              title='Enter your phone number'
              value={values.phone}
              onChange={(value) => handleOnChange('phone', value)}
              // onBlur={(value) => handleOnBlur('phone', value)}
              error={validation.phone(values.phone)}
              onFocus={() => handleTouchedInput('phone')}
              dirty={dirty.phone}
            />
            <Input
              label='Website URL'
              type='text'
              name='url'
              placeholder='https://github.com/IvanIvanov'
              title='Provide link to your website'
              value={values.url}
              onChange={(value) => handleOnChange('url', value)}
              // onBlur={(value) => handleOnBlur('url', value)}
              error={validation.url(values.url)}
              onFocus={() => handleTouchedInput('url')}
              dirty={dirty.url}
            />
          </div>
          <div className={styles.textArea}>
            <TextArea
              label='About you'
              placeholder='Please tell us about you...'
              name='about'
              type='text'
              title='Max 7 rows'
              rows='7'
              value={values.about}
              max='600'
              onFocus={() => handleTouchedInput('about')}
              onChange={(value) => handleOnChangeTextArea('about', value)}
              // onBlur={(value) => handleOnBlur('about', value)}
              error={validation.about(values.about)}
              dirty={dirty.about}
            />
            <TextArea
              label='Your tech stack'
              placeholder='Please tell us about your tech stack...'
              name='techstack'
              type='text'
              title='Max 7 rows'
              rows='7'
              value={values.techstack}
              max='600'
              onFocus={() => handleTouchedInput('techstack')}
              onChange={(value) => handleOnChangeTextArea('techstack', value)}
              // onBlur={(value) => handleOnBlur('about', value)}
              error={validation.techstack(values.techstack)}
              dirty={dirty.techstack}
            />
            <TextArea
              label='Project'
              placeholder='Please tell us about your last project...'
              name='project'
              type='text'
              title='Max 7 rows'
              rows='7'
              value={values.project}
              max='600'
              onFocus={() => handleTouchedInput('project')}
              onChange={(value) => handleOnChangeTextArea('project', value)}
              // onBlur={(value) => handleOnBlur('about', value)}
              error={validation.project(values.project)}
              dirty={dirty.project}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <SubmitButton label='Submit' />
          <ResetButton label='Reset' onClick={handleReset} />
        </div>
        <div className={styles.image}>
          <img src={logo} className={styles.Applogo} alt='logo' />
        </div>
      </form>
    </>
  );
}
