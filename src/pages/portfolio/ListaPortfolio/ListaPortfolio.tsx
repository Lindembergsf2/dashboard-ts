import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Portfolio, deletePortfolio, getPortfolio } from "../../../Services/portfolioService";
import { Column, Table } from "../../../components/common/Table/Table";

const ListaPortfolio: React.FC = () => {
    const navigate = useNavigate();

    const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
    console.log(portfolio)

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

        <Table 
            columns={columns}
            data={portfolio}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
};

export default ListaPortfolio;