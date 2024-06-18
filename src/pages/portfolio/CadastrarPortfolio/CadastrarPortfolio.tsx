import React, { useEffect } from "react";

import styles from './CadastrarPortfolio.module.css';

import { Formik, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

import * as Yup from 'yup';

import Input from "../../../components/forms/Input";

import { Portfolio, createOrUpdatePortfolio } from "../../../Services/portfolioService";


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
        <div className={styles.formWrapper}>
            <Formik 
            initialValues={portfolio || initialValues} 
            onSubmit={onSubmit} 
            validationSchema={validationSchema}>
                {({ errors, touched }) => (
                    <Form className={styles.form}>

                        <h2 className={styles.title}> Cadastro de Portfólio</h2>

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
                        <button className={styles.button} type="submit">Cadastrar</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CadastrarPortfolio;