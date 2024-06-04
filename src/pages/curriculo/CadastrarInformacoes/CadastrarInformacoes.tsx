import React from "react";

import styles from './CadastrarInformacoes.module.css';

const CadastrarInformacoes: React.FC = () => {
    return (
        <div className={styles.formWrapper}>

            <form action="" className={styles.form}>

                <h2 className={styles.title}>Informações Pessoais</h2>

                <fieldset className={styles.formGroup}>
                    <input
                        type="text"
                        name=""
                        id=""
                        className={styles.input}
                        placeholder="Nome"
                    />
                </fieldset>

                <fieldset className={styles.formGroup}>
                    <input
                        type="text"
                        name=""
                        id=""
                        className={styles.input}
                        placeholder="Foto (Insira o link da sua imagem)"
                    />
                </fieldset>

                <fieldset className={styles.formGroup}>
                    <input
                        type="text"
                        name=""
                        id=""
                        className={styles.input}
                        placeholder="Cargo"
                    />
                </fieldset>

                <fieldset className={styles.formGroup}>
                    <textarea
                        className={styles.textarea}
                        name=""
                        id=""
                        placeholder="Resumo"
                        rows={10}>

                    </textarea>

                </fieldset>

            </form>

        </div>
    );
};

export default CadastrarInformacoes;