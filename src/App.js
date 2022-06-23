import './App.css';
import React, { useState } from 'react';
import { Form } from './Components/Form/Form';
import { FilledForm } from './Components/FilledForm/FilledForm';

const datas = {};

export function App(props) {
  const [filled, setFilled] = useState(false);
  const [data, setData] = useState(datas);

  function resetFilledForm() {
    setFilled(false);
  }

  function onSubmitForm(state) {
    setData(state);
    setFilled(true);
  }

  return (
    <>
      {filled ? (
        <FilledForm
          title='FILLED FORM'
          stateData={data}
          onSubmit={resetFilledForm}
        />
      ) : (
        <Form title='REGISTRATION FORM' onSubmit={onSubmitForm} />
      )}
    </>
  );
}
