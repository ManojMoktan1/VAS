import React from 'react';
import logo from './logo.svg';

import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
    
    </Routes>
    </BrowserRouter>

  );
}

export default App;
