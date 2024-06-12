import React, { useEffect } from "react";

import styles from './ListarExperiencias.module.css'
import { getExperiencias } from "../../../Services/experienciaService";

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: number;
    anoFim: number;
};

const ListarExperiencia: React.FC = () => {
   
    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([]);

    const fetchExperiencias = async () => {
        try {
            const experiencia= await getExperiencias();
            setExperiencias(experiencia);
        } catch (error) {
            console.error('Erro ao buscar as experiências:', error);
        }
    };
    
    useEffect(() => {
        fetchExperiencias();
    })
    const handleDelete = (index: number) => {
        console.log(index);
    };
    
    const handleEdit = (index: number) => {
        console.log(index);
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
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListarExperiencia;