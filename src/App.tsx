import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./pages/Login/Login";

import AppRoutes from './Routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';



const App: React.FC = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
};

export default App;
