import React, { useEffect } from "react";

import styles from './ListaPortfolio.module.css';

import { useNavigate } from "react-router-dom";

import { Portfolio, deletePortfolio, getPortfolio } from "../../../Services/portfolioService";

const ListaPortfolio: React.FC = () => {
    const navigate = useNavigate();

    const [portfolio, setPortfolio] = React.useState<Portfolio[]>([]);

    const fetchPortfolio = async () => {
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        } catch (error) {
            console.log('Erro ao buscar as experiências:', error);
        }
    };
                                                                                                                                                       
    useEffect(() => {
        fetchPortfolio();
    }, []);

    const handleEdit = (portfolio: Portfolio) => {
       navigate('/portfolio/cadastro', { state: { portfolio } })
    };
    
    const handleDelete = async (portfolio: Portfolio) => {
        try {
            await deletePortfolio(portfolio)
            fetchPortfolio();
            alert('Item de portfolio excluído com sucesso!');
        }
        catch (error) {
            console.log('Erro ao excluir:', error);
            alert("ocorreu um erro ao excluir o item de portfolio. Tente novamente. ");
        }
    };

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
                {portfolio.map((portfolio, index) => (
                    <tr key={index}>
                        <td>{portfolio.title}</td>
                        <td><img src={portfolio.image} alt={portfolio.title} className={styles.image} /></td>
                        <td><a href={portfolio.link} target="_blank" rel="noreferrer">{portfolio.link}</a></td>
                        <td>
                            <button className={styles.btnEdit} onClick={() => handleEdit(portfolio)}>Editar</button>
                            <button className={styles.btnDelete} onClick={() => handleDelete(portfolio)}>Deletar</button>
                        </td>

                    </tr>
                ))}
            </tbody>

        </table>
    )
};

export default ListaPortfolio;