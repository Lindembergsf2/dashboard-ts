import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


import { Experiencia, getExperiencias, deleteExperiencia } from "../../../Services/experienciaService";
import { Column, Table } from "../../../components/common/Table/Table";



const ListarExperiencia: React.FC = () => {

    const navigate = useNavigate();

    const [experiencias, setExperiencias] = useState<Experiencia[]>([]);

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

    const handleEdit = (experiencia: Experiencia) => {
       navigate('/curriculo/experiencias/cadastro', { state: { experiencia } })
    };
    
    const handleDelete = async (experiencia: Experiencia) => {
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

    const columns: Column<Experiencia>[] = [
        { header: 'Título', accessor: 'titulo' },
        { header: 'Descrição', accessor: 'descricao' },
        { header: 'Tipo', accessor: 'tipo' },
        { header: 'Ano Inicio', accessor: 'anoInicio' },
        { header: 'Ano Fim', accessor: 'anoFim' },
    ];


    return <Table
            columns={ columns }
            data={ experiencias }
            handleEdit={ handleEdit }
            handleDelete={ handleDelete }
        />

};

export default ListarExperiencia;