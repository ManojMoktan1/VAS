import React from 'react';


import './App.css';
import 'antd/dist/antd.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Register from './components/Register';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppointmentForm from './components/AppointmentForm';
import ClientPatientRegisterForm from './components/ClientPatientRegisterForm';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/client-register' element={< ClientPatientRegisterForm/>} />
        <Route path='/appointment' element={<AppointmentForm />} />
      </Routes>
      </BrowserRouter>
      </Provider>
  

  );
}

export default App;
