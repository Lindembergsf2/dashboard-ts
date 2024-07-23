import React, { useEffect, useState } from "react";

import styles from './Home.module.css';

import { FaGraduationCap, FaBriefcase, FaFolder } from "react-icons/fa";

import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";

import { Portfolio, getPortfolio } from "../../Services/portfolioService";
import { Experiencias, getExperienciasByTipo } from "../../Services/experienciaService";

const Home: React.FC = () => {
    const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
    const [experienciasProfissionais, setExperienciasProfissionais] = useState<Experiencias[]>([]);
    const [experienciasAcademicas, setExperienciasAcademicas] = useState<Experiencias[]>([]);

    const fetchExprienciasAcademicas = async () => {
        try {
            const response = await getExperienciasByTipo('Acadêmico');
            setExperienciasAcademicas(response);
        } catch (error) {
            console.log('Erro ao buscar as experiências:', error);
        }
    };

    const fetchExperienciasProfissionais = async () => {
        try {
            const response = await getExperienciasByTipo('Profissional');
            setExperienciasProfissionais(response);
        } catch (error) {
            console.log('Erro ao buscar as experiências:', error);
        }
    };

    const fetchPortfolio = async () => {
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPortfolio();
        fetchExprienciasAcademicas();
        fetchExperienciasProfissionais();
    }, []);

    return (
        <main className={styles.container}>
            <Title>Bem-vindo ao Sistema Admin do Meu Site Pessoal! </Title>
            <p className={styles.description}>Esta é a pagina inicial. Navegue pelo menu da barra lateral para explorar outras opções</p>
            <div className={styles.infoBoxContainer}>
                <InfoBox
                    icon={<FaGraduationCap />}
                    title="Experiências Acadêmicas"
                    value={experienciasAcademicas.length}
                />
                <InfoBox
                    icon={<FaBriefcase />}
                    title="Experiências Profissionais"
                    value={experienciasProfissionais.length}
                />
                <InfoBox
                    icon={<FaFolder />}
                    title="Portfolio"
                    value={portfolio.length}
                />
            </div>
        </main>
    );
};

export default Home;