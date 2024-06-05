import React from "react";

import styles from './Input.module.css';

import { Field, ErrorMessage } from 'formik';

interface InputProps {
    name: string;
    type?: string;
    errors?: string;
    touched?: boolean;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ name, type = 'text', errors, touched, placeholder }) => {
    return (
        <fieldset className={styles.formGroup}>
            <Field
                type={type}
                name={name}
                id={name}
                className={`${styles.input} ${touched && errors ? styles.error : ''}`}
                placeholder={placeholder}
            />
            <ErrorMessage name="nome" component="div" className={styles.errorMsg} />
        </fieldset>
    )
};

export default Input;