import React from 'react';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleSubmit } = useForm(
    step = 1,
    submitForm
  );
  nexStep = () =>{
    const { step } = this.state;
    this.setState({
      step : step + 1
    });
  }
  prevStep = () =>{
    const { step } = this.state;
    this.setState({
      step : step - 1
    });
  }
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <img className='form-logo' src='images/logo.png' alt='logo' />
           <p className='text'>Bienvenue sur <b>Fewnu !</b></p>

        <button className='form-input-btn' type='submit' onClick={this.continue.bind(this)}>
          SE CONNECTER
        </button>
        <button className='form-input-btn2' type='submit'>
          S'INSCRIRE
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
