import React from "react";

import styles from './Cadastrarexperiencias.module.css';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation } from "react-router-dom";


import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import Select from "../../../components/forms/Select";

import { Experiencia, createOrUpdateExperiencia, } from "../../../Services/experienciaService";

const CadastrarExperiencia: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const experiencia = location.state?.experiencia || null;

    const initialValues: Experiencia = {
        id: 0,
        titulo: "",
        descricao: "",
        tipo: "",
        anoInicio: "",
        anoFim: "",
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório'),
        tipo: Yup.string().required('Campo obrigatório'),
        anoInicio: Yup.number().required('Campo obrigatório'),
        anoFim: Yup.number().required('Campo obrigatório'),
    });

    const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateExperiencia(values);
            console.log({ values })
            resetForm();
            navigate('/curriculo/experiencias/lista')
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    };

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={experiencia || initialValues}
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
                                { value: 'Acadêmico', label: 'Acadêmico' },
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

                        <button type="submit" className={styles.button}>Salvar</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CadastrarExperiencia;