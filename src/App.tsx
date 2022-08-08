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
import ManagerPatientCreateForm from './components/ManagerPatientCreateForm';
import VaccinationCreateForm from './components/VaccinationCreateForm';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <Provider store={store}>   
      <BrowserRouter>
      <Routes>
          <Route element = {<AuthRoute />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
          </Route>
          <Route element = {<ProtectedRoute />}>
            <Route path='/' element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path='/client-register' element={< ClientPatientRegisterForm/>} />
              <Route path='/create-patient' element={< ManagerPatientCreateForm/>} />
              <Route path='/create-vaccination' element={< VaccinationCreateForm/>} />
              <Route path='/appointment' element={<AppointmentForm />} />
            </Route>
        </Route>
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
      </BrowserRouter>
      </Provider>
  

  );
}

export default App;
