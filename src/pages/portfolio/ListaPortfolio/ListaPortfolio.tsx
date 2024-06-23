import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Portfolio, deletePortfolio, getPortfolio } from "../../../Services/portfolioService";
import { Column, Table } from "../../../components/common/Table/Table";

const ListaPortfolio: React.FC = () => {
    const navigate = useNavigate();

    const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

    const fetchPortfolio = async () => {
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        } catch (error) {
            console.log(error);
            alert('Erro ao buscar as Portfolio')
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

    const columns: Column<Portfolio>[] = [

        { header: 'Título', accessor: 'title' },
        { header: 'Imagem', accessor: 'image' },
        { header: 'Links', accessor: 'link' },
    ]

    return (
        // <table className={styles.table}>

        //     <thead>
        //         <tr>
        //             <th>Título</th>
        //             <th>imagem</th>
        //             <th>Links</th>
        //             <th>Ações</th>
        //         </tr>
        //     </thead>

        //     <tbody>
        //         {portfolio.map((portfolio, index) => (
        //             <tr key={index}>
        //                 <td>{portfolio.title}</td>
        //                 <td><img src={portfolio.image} alt={portfolio.title} className={styles.image} /></td>
        //                 <td><a href={portfolio.link} target="_blank" rel="noreferrer">{portfolio.link}</a></td>
        //                 <td>
        //                     <button className={styles.btnEdit} onClick={() => handleEdit(portfolio)}>Editar</button>
        //                     <button className={styles.btnDelete} onClick={() => handleDelete(portfolio)}>Deletar</button>
        //                 </td>

        //             </tr>
        //         ))}
        //     </tbody>

        // </table>

        <Table 
            columns={columns}
            data={portfolio}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
};

export default ListaPortfolio;