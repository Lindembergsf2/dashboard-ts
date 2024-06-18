import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./pages/Login/Login";
import AppRoutes from './Routes/AppRoutes';



const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
