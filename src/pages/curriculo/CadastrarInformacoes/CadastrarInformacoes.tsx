import React from "react";

import styles from './CadastrarInformacoes.module.css';

import * as Yup from 'yup';
import { Formik, Form, } from 'formik';

import Input from "../../../components/forms/Input";
import TextArea from "../../../components/forms/Textarea";
import { Informacoes, createInformacao } from "../../../Services/informacoesService";

const CadastrarInformacoes: React.FC = () => {

    const initialValues: Informacoes = {
        id: 1,
        foto: '',
        nome: '',
        titulo: '',
        resumo: '',

    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        titulo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório'),
    });

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try {

            await createInformacao(values);
            console.log({ values })
            resetForm();
            alert('Formulário enviado com sucesso!');

        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }

    };

    return (
        <div className={styles.formWrapper}>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (

                    <Form className={styles.form}>

                        <h2 className={styles.title}>Informações Pessoais</h2>

                        <Input name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                            placeholder="Nome"
                        />

                        <Input name="foto"
                            errors={errors.foto}
                            touched={touched.foto}
                            placeholder="Foto (Insira o link da sua imagem)"
                        />

                        <Input name="titulo"
                            errors={errors.titulo}
                            touched={touched.titulo}
                            placeholder="Titulo do resumo"
                        />

                        <TextArea
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                            placeholder="Resumo"
                        />

                        <button type="submit" className={styles.button}>Cadastrar</button>

                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default CadastrarInformacoes;