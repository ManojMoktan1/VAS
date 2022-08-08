import React  from 'react';
import './ClientPatientRegisterForm.css';
import ManageAndPatientForm from './ManagerAndPatientForm';



const ClientPatientRegisterForm = () => {
  return(
    <div className='form-wrapper'>
    <div className='card'>

    <h1 className= 'card__title'>PATIENT REGISTRATION FORM</h1>
    <ManageAndPatientForm />
    </div>
    </div>
  )
  };

export default () => <ClientPatientRegisterForm />;