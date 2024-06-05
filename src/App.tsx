import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout';


import Home from './pages/home';
import CadastrarInformacoes from './pages/curriculo/CadastrarInformacoes';
import CadastrarExperiencias from './pages/curriculo/Cadastrarexperiencias';


const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes />} />
            <Route path='/curriculo/experiencias/cadastro' element={<CadastrarExperiencias />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>

  );
};

export default App;
