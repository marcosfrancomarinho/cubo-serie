import React from 'react';
import style from './Input.module.css';

const InputEmail: React.FC = () => {
    return (
        <div className={style.input_container}>
            <label className={style.label} htmlFor="email">
                Email:
            </label>
            <input
                className={style.input}
                type="email"
                name="email"
                id="email"
                placeholder="Insira o e-mail"
                autoComplete="email"
            />
        </div>
    );
};
export default InputEmail;
