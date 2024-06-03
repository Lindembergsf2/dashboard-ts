import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout';
import Home from './pages/home';


const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>

  )
};

export default App;
