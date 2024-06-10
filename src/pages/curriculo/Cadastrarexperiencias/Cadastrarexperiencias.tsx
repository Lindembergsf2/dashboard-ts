import React from "react";

import styles from './Cadastrarexperiencias.module.css';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import Select from "../../../components/forms/Select";

interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
};

const CadastrarExperiencia: React.FC = () => {

    const initialValues: FormValues = {
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
        anoInicio: Yup.number().required('Campo obrigatório'),
        anoFim: Yup.number().required('Campo obrigatório'),
    });

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log({ values })
        resetForm();
        alert('Formulário enviado com sucesso!');
    };

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    
                    {({ errors, touched }) => (

                <Form className={styles.form}>

                    <h2 className={styles.title}>Cadastrar Experiência</h2>

                    <Input
                        name="titulo"
                        placeholder="Título"
                        errors={errors.titulo}
                        touched={touched.titulo}
                    />

                    <Select
                        name="tipo"
                        options={[
                            { value: 'Pessoal', label: 'Pessoal' },
                            { value: 'Profissional', label: 'Profissional' },
                        ]}

                    ></Select>

                    <Input
                        name="anoInicio"
                        placeholder="Ano de Início"
                        errors={errors.anoInicio}
                        touched={touched.anoInicio}
                    />

                    <Input
                        name="anoFim"
                        placeholder="Ano de Fim"
                        errors={errors.anoFim}
                        touched={touched.anoFim}
                    />

                    <Textarea
                        name="descricao"
                        placeholder="Descrição"
                        errors={errors.descricao}
                        touched={touched.descricao}
                    />

                    <button type="submit" className={styles.button}>Cadastrar</button>

                </Form>
            )}
            </Formik>
        </div>
    );
};

export default CadastrarExperiencia;