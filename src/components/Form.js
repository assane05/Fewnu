import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import Form2 from './Form2';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='images/im1.jpg' alt='images' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Form2 />
        )}
      </div>
    </>
  );
};

export default Form;
