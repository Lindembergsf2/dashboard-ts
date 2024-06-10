import React from "react";

import styles from './CadastrarPortfolio.module.css';

import { Formik, Form } from "formik";

import * as Yup from 'yup';

import Input from "../../../components/forms/Input";

interface FormValues {
    link: string;
    image: string;
    title: string;
};

const initialValues: FormValues = {
    link: "",
    image: "",
    title: "",
};

const validationSchema = Yup.object().shape({

    link: Yup.string().required('Campo obrigatório'),
    image: Yup.string().required('Campo obrigatório'),
    title: Yup.string().required('Campo obrigatório'),
});

const CadastrarPortfolio: React.FC = () => {

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log({ values })
        resetForm();
        alert('Formulário enviado com sucesso!');
    }

    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
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