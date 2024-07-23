import React from "react";

import * as Yup from 'yup';
import { useNavigate, useLocation } from "react-router-dom";

import styles from './Cadastrarexperiencias.module.css';

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import Select from "../../../components/forms/Select";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";
import Form from "../../../components/forms/Form";

import { Experiencias, createOrUpdateExperiencia } from "../../../Services/experienciaService";

const CadastrarExperiencia: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const experiencia = location.state?.experiencia || null;

    const initialValues: Experiencias = {
        id: 0,
        titulo: "",
        descricao: "",
        tipo: "",
        anoinicio: "",
        anofim: ""
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório'),
        tipo: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string(),
        anoinicio: Yup.string().required('Campo obrigatório').typeError('Um número é obrigatório'),
        anofim: Yup.string().required('Campo obrigatório').typeError('Um número é obrigatório'),
    });

    const onSubmit = async (values: Experiencias, { resetForm }: { resetForm: () => void }) => {
        try {
            console.log({ values })
            await createOrUpdateExperiencia(values);
            resetForm();
            navigate('/curriculo/experiencias/lista')
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    };

    return (
        <div className={styles.container}>
            <Form
                initialValues={experiencia || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                {({ errors, touched }) => (

                    <>
                        {
                            !experiencia ?
                                <Title>Cadastrar Experiência</Title>
                                :
                                <Title>Atualizar Experiência</Title>
                        }

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
                            name="anoinicio"
                            placeholder="Ano de Início"
                            errors={errors.anoinicio}
                            touched={touched.anoinicio}
                        />

                        <Input
                            name="anofim"
                            placeholder="Ano de fim"
                            errors={errors.anofim}
                            touched={touched.anofim}
                        />

                        <Textarea
                            name="descricao"
                            placeholder="Descrição"
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />

                        <Button type="submit">Salvar</Button>

                    </>

                )}
            </Form>
        </div>

    );
};

export default CadastrarExperiencia;