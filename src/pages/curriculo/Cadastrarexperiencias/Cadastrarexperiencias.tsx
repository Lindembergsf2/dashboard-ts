import React from "react";

import styles from './Cadastrarexperiencias.module.css';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from "../../../components/forms/Input";

interface CadastrarExperienciaProps {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
};

const CadastrarExperiencia: React.FC<CadastrarExperienciaProps> = () => {

    const initialValues: CadastrarExperienciaProps = {
        titulo: '',
        descricao: '',
        tipo: '',
        anoInicio: '',
        anoFim: '',
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string().required('Campo obrigatório'),
        tipo: Yup.string().required('Campo obrigatório'),
        anoInicio: Yup.string().required('Campo obrigatório'),
        anoFim: Yup.string().required('Campo obrigatório'),
    });

    const onSubmit = (values: CadastrarExperienciaProps, { resetForm }: { resetForm: () => void }) => {
        console.log({ values })
        resetForm();
        alert('Formulário enviado com sucesso!');
    };

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar Experiência</h2>
                        <Input name="titulo" placeholder="Título" />
                    </Form>
                )}
                </Formik>
        </div>
    );
};

export default CadastrarExperiencia;