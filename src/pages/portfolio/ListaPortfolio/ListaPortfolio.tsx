import React from "react";

import styles from './ListaPortfolio.module.css';

interface Portfolio {
    title: string;
    image: string;
    link: string;
};

const ListaPortfolio: React.FC = () => {

    const [portfolio, setPortfolio] = React.useState<Portfolio[]>([
        {
            link: "https://lindemberglima.netlify.app/",
            image: "https://i.ibb.co/JvZGDwK/card-site.png",
            title: "Site pessoal construido em HTML e CSS"
        },
        {
            link: "https://www.instagram.com/p/CrIxZZ8ABTb/?img_index=2",
            image: "https://i.ibb.co/kcFhcxF/card-site-2.png",
            title: "Material Social Media Loja de Piscinas"
        },
        {
            link: "https://www.instagram.com/p/CrI1VjBgYVg/?img_index=2",
            image: "https://i.ibb.co/9qHyVMp/card-site-3.png",
            title: "Material Social Media Estetica Automotiva"
        }
    
    ]);

    console.log(setPortfolio);
    const handleEdit = (index: number) => {
        console.log(index);
        
    }

    const handleDelete = (index: number) => {
        console.log(index);
    }

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
                        <td>
                            <button className={styles.btnEdit} onClick={() => handleEdit(index)}>Editar</button>
                            <button className={styles.btnDelete} onClick={() => handleDelete(index)}>Deletar</button>
                        </td>

                    </tr>
                ))}
            </tbody>

        </table>
    )
};

export default ListaPortfolio;