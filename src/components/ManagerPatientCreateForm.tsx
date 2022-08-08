import React from 'react';
import './ClientPatientRegisterForm.css';
import ManageAndPatientForm from './ManagerAndPatientForm';

const ManagerPatientCreateForm = () => {
  return (
    <div className='form-wrapper'>
    <div className='card'>

    <h1 className= 'card__title'>CREATE PATIENT FORM</h1>
    <ManageAndPatientForm />
    </div>
    </div>

  );
};

export default () => <ManagerPatientCreateForm />;