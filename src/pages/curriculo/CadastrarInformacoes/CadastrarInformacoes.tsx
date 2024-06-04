import React from "react";

import styles from './CadastrarInformacoes.module.css';

import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;

}


const CadastrarInformacoes: React.FC = () => {

    const initialValues: FormValues = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',

    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        cargo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório'),
    });

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log({ values })
        resetForm();
        alert('Formulário enviado com sucesso!');
    };

    return (
        <div className={styles.formWrapper}>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                <Form className={styles.form}>

                    <h2 className={styles.title}>Informações Pessoais</h2>

                    <fieldset className={styles.formGroup}>
                        <Field
                            type="text"
                            name="nome"
                            id="nome"
                            className={`${styles.input} ${touched.foto && errors.foto ? styles.error : ''}`}
                            placeholder="Nome"
                        />
                        <ErrorMessage name="nome" component="div" className={styles.errorMsg} />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <Field
                            type="text"
                            name="foto"
                            id="foto"
                            className={`${styles.input} ${touched.foto && errors.foto ? styles.error : ''}`}
                            placeholder="Foto (Insira o link da sua imagem)"
                        />
                        <ErrorMessage name="foto" component="div" className={styles.errorMsg} />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <Field
                            type="text"
                            name="cargo"
                            id="cargo"
                            className={`${styles.input} ${touched.foto && errors.foto ? styles.error : ''}`}
                            placeholder="Cargo"
                        />
                        <ErrorMessage name="cargo" component="div" className={styles.errorMsg} />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <Field
                            as="textarea"
                            className={`${styles.textarea} ${touched.foto && errors.foto ? styles.error : ''}`}
                            name="resumo"
                            id="resumo"
                            placeholder="Resumo"
                            rows={7}>

                        </Field>
                        <ErrorMessage name="resumo" component="div" className={styles.errorMsg} />
                    </fieldset>

                    <button type="submit" className={styles.button}>Cadastrar</button>

                </Form>
                )}
            </Formik>
            
        </div>
    );
};

export default CadastrarInformacoes;