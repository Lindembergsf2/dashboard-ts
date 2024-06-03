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
                        <NavLink to="/curriculo/cadastro/resumo" className={styles.active}>
                            Cadastrar Resumo
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/curriculo/cadastro/experiencia-academica" className={styles.active}>
                            Cadastrar Experiência Acadêmica
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/curriculo/cadastro/experiencia-profissional" className={styles.active}>
                            Cadastrar Experiência Profissional
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
                        <NavLink to="/portfolio/cadastro" className={styles.active}>
                            Listagem de Portfólios
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default Sidebar;