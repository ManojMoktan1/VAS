import React from 'react';
import logo from './logo.svg';

import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import { AuthProvider } from './contexts';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
   </AuthProvider>

  );
}

export default App;
