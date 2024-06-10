import React from "react";

import styles from './ListarExperiencias.module.css'

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: number;
    anoFim: number;
};

const ListarExperiencia: React.FC = () => {
   
    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([
        {
            titulo: "Desenvolvedor Web",
            descricao: "Desenvolvimento de sites e aplicativos web.",
            tipo: "Freelancer",
            anoInicio: 2022,
            anoFim: 2023,
        },
        {
            titulo: "Desenvolvedor Web",
            descricao: "Desenvolvimento de sites e aplicativos web.",
            tipo: "Freelancer",
            anoInicio: 2022,
            anoFim: 2023,
        },
        {
            titulo: "Desenvolvedor Web",
            descricao: "Desenvolvimento de sites e aplicativos web.",
            tipo: "Freelancer",
            anoInicio: 2022,
            anoFim: 2023,
        },
    ]);

    console.log(setExperiencias);
    
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