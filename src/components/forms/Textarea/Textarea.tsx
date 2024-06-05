import React from "react";

import styles from './Textarea.module.css';

import { Field, ErrorMessage } from 'formik';

interface TextareaProps {
    name: string;
    errors?: string;
    touched?: boolean;
    placeholder?: string;
}


const Textarea: React.FC<TextareaProps> = ({ name, errors, touched, placeholder }) => {
    return (
        <fieldset className={styles.formGroup}>
            <Field
                as="textarea"
                name={name}
                id={name}
                className={`${styles.textarea} ${touched && errors ? styles.error : ''}`}
                placeholder={placeholder}
                rows={5}
            />
            <ErrorMessage name="nome" component="div" className={styles.errorMsg} />
        </fieldset>
    )
};

export default Textarea;