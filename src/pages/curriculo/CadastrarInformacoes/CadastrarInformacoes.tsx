import React, { useState, useEffect } from "react";

import styles from './CadastrarInformacoes.module.css';

import * as Yup from 'yup';
import { Formik, Form, } from 'formik';

import Input from "../../../components/forms/Input";
import TextArea from "../../../components/forms/Textarea";
import { Informacoes, createInformacao, getInformacao } from "../../../Services/informacoesService";
import InformacoesCard from "./InformacoesCard";

const CadastrarInformacoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes);

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

    const fetchInformacao = async () => {
        try {
            const informacoes = await getInformacao();
            setInformacoes(informacoes);
        } catch (error) {
            console.error('Erro ao buscar informações:', error);
        }
    };

    useEffect(() => {
        fetchInformacao();
    }, []);

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try {

            await createInformacao(values);
            setInformacoes(values)
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

            <InformacoesCard informacao={informacoes}/>

        </div>
    );
};

export default CadastrarInformacoes;