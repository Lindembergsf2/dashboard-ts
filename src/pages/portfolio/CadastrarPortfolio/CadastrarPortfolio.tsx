import React, { useEffect } from "react";

import styles from './CadastrarPortfolio.module.css';

import { useNavigate, useLocation } from "react-router-dom";

import * as Yup from 'yup';

import Input from "../../../components/forms/Input";
import Form from "../../../components/forms/Form";

import { Portfolio, createOrUpdatePortfolio } from "../../../Services/portfolioService";
import Title from "../../../components/common/Title";
import Button from "../../../components/common/Button";


const initialValues: Portfolio = {
    id: "0",
    link: "",
    image: "",
    title: ""
};

const validationSchema = Yup.object().shape({

    link: Yup.string().required('Campo obrigatório'),
    image: Yup.string().required('Campo obrigatório'),
    title: Yup.string().required('Campo obrigatório'),
});

const CadastrarPortfolio: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const portfolio = location.state?.portfolio || null;

    useEffect(() => {
        console.log(location)
    }, [])

    const onSubmit = async (values: Portfolio, { resetForm }: { resetForm: () => void }) => {
        try {
            console.log({ values })
            await createOrUpdatePortfolio(values);
            resetForm();
            navigate('/portfolio/lista')
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    };

    return (
        <div className={styles.container}>
            <Form
                initialValues={portfolio || initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {({ errors, touched }) => (
                    <>
                        {
                            !portfolio?
                            <Title> Cadastro de Portfólio</Title>
                            : 
                            <Title> Edição de Portfólio</Title>
                        }

                        

                        <Input
                            placeholder="Link"
                            name="link"
                            errors={errors.link}
                            touched={touched.link}
                        />
                        <Input
                            placeholder="Imagem"
                            name="image"
                            errors={errors.image}
                            touched={touched.image}
                        />
                        <Input
                            placeholder="Título"
                            name="title"
                            errors={errors.title}
                            touched={touched.title}
                        />
                        <Button type="submit">Salvar</Button>

                    </>
                )}
            </Form>
        </div>
    );
};

export default CadastrarPortfolio;