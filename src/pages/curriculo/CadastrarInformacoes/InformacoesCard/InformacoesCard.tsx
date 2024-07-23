import React from "react";

import styles from './InformacoesCard.module.css';

import { Informacoes } from "../../../../Services/informacoesService";

interface InformacoesCardProps {
    informacao: Informacoes
};


const InformacoesCard: React.FC<InformacoesCardProps> = ({ informacao }) => {
    const { foto, nome, titulo, resumo } = informacao;
    console.log(informacao)
    return (
        <div className={styles.card}>
            <img src={foto} alt={`${nome}'s foto`} className={styles.foto} />
            <div className={styles.content}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p className={styles.resumo}>{resumo}</p>
            </div>
        </div>
    );
};

export default InformacoesCard;