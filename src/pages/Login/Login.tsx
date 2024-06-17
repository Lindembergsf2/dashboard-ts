import React from "react";

import styles from './Login.module.css';

import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Input from "../../components/forms/Input";

interface LoginValues {
    email: string;
    password: string;
}

const initialValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email inválido")
        .required("Email obrigatório"),
    password: Yup.string()
        .min(6, "Senha deve ter pelo menos 6 caracteres")
        .required("Senha obrigatória"),
});

const Login : React.FC = () => {

    const onSubmit = async (values: LoginValues) => {
        try {
            //Lógica de login
            console.log({ values });
        } catch (error) {
            console.log('Erro ao logar:', error);
        };
    };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.formWapper}>

                <Formik 
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {({ errors, touched }) => (
                        <Form className={styles.form}>
                            <h2 className={styles.title}>Login</h2>
                            <Input
                                placeholder="Email"
                                name="email"
                                type="email"
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <Input
                                placeholder="Senha"
                                name="password"
                                type="password"
                                errors={errors.password}
                                touched={touched.password}
                            />
                            <button type="submit" className={styles.button}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>

            </div>
            
        </div>
    )
};

export default Login;