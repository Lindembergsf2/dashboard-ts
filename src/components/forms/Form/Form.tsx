import React from "react";

import { Formik } from "formik";

import styles from "./Form.module.css";

interface FormProps {
    initialValues: object;
    validationSchema: object;
    onSubmit: () => void;
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
    return (
        <div className={styles.formWrapper}>
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            {children}
        </Formik>
        </div>
    )
};

export default Form;