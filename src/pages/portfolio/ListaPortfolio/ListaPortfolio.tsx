import React from "react";

import styles from './ListaPortfolio.module.css';

const ListaPortfolio: React.FC = () => {
    return (
        <table className={styles.table}>

            <thead>
                <tr>
                    <th>Título</th>
                    <th>imagem</th>
                    <th>Links</th>
                    <th>Ações</th>    
                </tr>
            </thead>

            <tbody>
                {portfolio.map((itemPortfolio, index) => (
                    <tr key={index}>
                        <td>{itemPortfolio.title}</td>
                        <td><img src={itemPortfolio.image} alt={itemPortfolio.title} className={styles.image} /></td>
                        <td><a href={itemPortfolio.link} target="_blank" rel="noreferrer">{itemPortfolio.link}</a></td>
                        <td><button onClick={}>Editar</button></td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
};

export default ListaPortfolio;