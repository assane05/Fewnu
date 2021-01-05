import React, { Component } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const Form2 = ({ submitForm }) => {

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  class Formulaire extends Component{
    continue = e => {
      e.preventDefault();
      this.props.nextStep;
    }

  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Connectez-vous
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Telephone</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
       
        <div className='form-inputs'>
          <label className='form-label'>Mot de passe</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          <a href='#'>Mot de passe oublié ?</a>
           <a href='#'>J'ai pas encore de Compte</a>
        </span>
      </form>
      <Formulaire />
    </div>
  );
};

export default Form2;
