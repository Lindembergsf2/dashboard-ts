import React from "react";

//import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import styles from './Login.module.css';


import Input from "../../components/forms/Input";
import { login as LoginService } from "../../Services/authService";
import { useAuth } from "../../contexts/AuthContext";

import Form from "../../components/forms/Form";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title/Title";

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

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = async (values: LoginValues) => {
        try {
            const user = await LoginService(values.email, values.password);
            login(user);
            navigate('/');
            console.log({ values });
        } catch (error) {
            console.log('Erro ao logar:', error);
        };
    };

    return (
        <div className={styles.loginWrapper}>

            <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {({ errors, touched }) => (

                    <>
                    <Title>Login</Title>

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

                    <Button type="submit">Entrar</Button>  
                    
                    </>
                )}

            </Form>

        </div>
    )
};

export default Login;