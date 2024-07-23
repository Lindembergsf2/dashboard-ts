import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


import { Experiencias, getExperiencias, deleteExperiencia } from "../../../Services/experienciaService";
import { Column, Table } from "../../../components/common/Table/Table";



const ListarExperiencia: React.FC = () => {

    const navigate = useNavigate();

    const [experiencias, setExperiencias] = useState<Experiencias[]>([]);

    const fetchExperiencias = async () => {
        try {
            const experiencia = await getExperiencias();
            setExperiencias(experiencia);
        } catch (error) {
            console.log('Erro ao buscar as experiências:', error);
        }
    };
                                                                                                                                                       
    useEffect(() => {
        fetchExperiencias();
    }, []);

    const handleEdit = (experiencia: Experiencias) => {
       navigate('/curriculo/experiencias/cadastro', { state: { experiencia } })
    };
    
    const handleDelete = async (experiencia: Experiencias) => {
        try {
            await deleteExperiencia(experiencia)
            fetchExperiencias();
            alert('Experiência excluída com sucesso!');
        }
        catch (error) {
            console.log('Erro ao excluir:', error);
            alert("Ocorreu um erro ao excluir a experiência. Tente novamente. ");
        }
    };

    const columns: Column<Experiencias>[] = [
        { header: 'Título', accessor: 'titulo' },
        { header: 'Descrição', accessor: 'descricao' },
        { header: 'Tipo', accessor: 'tipo' },
        { header: 'Ano Inicio', accessor: 'anoinicio' },
        { header: 'Ano Fim', accessor: 'anofim' },
    ];


    return <Table
            columns={ columns }
            data={ experiencias }
            handleEdit={ handleEdit }
            handleDelete={ handleDelete }
        />

};

export default ListarExperiencia;