import React from "react";

import { Route, Routes } from 'react-router-dom'

import Layout from "../components/layout/Layout";

import Home from "../pages/home/home";
import CadastrarInformacoes from "../pages/curriculo/CadastrarInformacoes";
import CadastrarExperiencias from "../pages/curriculo/Cadastrarexperiencias/Cadastrarexperiencias";
import ListaPortfolio from "../pages/portfolio/ListaPortfolio";
import ListarExperiencia from "../pages/curriculo/ListarExperiencia";
import CadastrarPortfolio from "../pages/portfolio/CadastrarPortfolio";



const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes />} />
                <Route path='/curriculo/experiencias/cadastro' element={<CadastrarExperiencias />} />
                <Route path='/curriculo/experiencias/lista' element={<ListarExperiencia />} />
                <Route path='/portfolio/cadastro' element={<CadastrarPortfolio />} />
                <Route path='/portfolio/lista' element={<ListaPortfolio />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;
