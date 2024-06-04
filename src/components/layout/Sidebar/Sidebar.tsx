import React from "react";

import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.css'

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>

                <ul>
                    <li>
                        <NavLink to="/" className={styles.active}>
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>

                <h3>Currículo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/informacoes/cadastro" className={styles.active}>
                            Cadastrar Informações
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/curriculo/experiencias/cadastro" className={styles.active}>
                            Cadastrar Experiências
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/curriculo/experiencias/lista" className={styles.active}>
                            Listar Experiências
                        </NavLink>
                    </li>
                </ul>

                <h3>Portfólio</h3>
                <ul>
                    <li>
                        <NavLink to="/portfolio/cadastro" className={styles.active}>
                            Cadastrar Portfólio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/lista" className={styles.active}>
                            Listar de Portfólios
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default Sidebar;