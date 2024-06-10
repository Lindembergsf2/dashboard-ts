import React from "react";

import styles from './Select.module.css';


interface Option {
    value: string;
    label: string;
};

interface SelectProps {
    name: string;
    options: Option[];
    errors?: string;
    touched?: boolean;
};


const Select: React.FC<SelectProps> = ({ name, options, errors, touched }) => {
    const errorStyle = errors && touched ? styles.error : '';
    return (
        <div className={styles.formGroup}>
            <select name={name} id={name} className={`${styles.input} ${errorStyle}`}>
                <option value="">Selecione um tipo</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && touched && <div className={styles.errorMsg}>{errors}</div>}
        </div>
    )
}

export default Select;