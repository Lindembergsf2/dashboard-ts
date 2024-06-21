import React from "react";

import styles from './Button.module.css'

interface ButtonProps {
    type?: "button" | "submit";
    onClick?: () => void;
    children: React.ReactNode;
    red?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, onClick, red = false, type = "button" }) => {
  
    return <button 
    type={type} 
    onClick={onClick} 
    className={`${styles.button} ${red && styles.redButton}`}>
        {children}
    </button>
};

export default Button;