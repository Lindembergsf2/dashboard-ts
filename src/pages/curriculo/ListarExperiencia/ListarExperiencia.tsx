import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from './ListarExperiencias.module.css'
import { Experiencia, getExperiencias, deleteExperiencia } from "../../../Services/experienciaService";



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
            alert("ocorreu um erro ao excluir a experiência. Tente novamente. ");
        }
    };


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Ano de Início</th>
                    <th>Ano de Fim</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiencias.map((experiencia, index) => (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.descricao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(experiencia)}>Editar</button>
                            <button onClick={() => handleDelete(experiencia)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListarExperiencia;