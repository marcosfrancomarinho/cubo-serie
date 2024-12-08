import React from 'react';
import style from './Input.module.css';

const InputName: React.FC = () => {
    return (
        <div className={style.input_container}>
            <label className={style.label} htmlFor="name">
                Nome:
            </label>
            <input
                className={style.input}
                type="name"
                name="name"
                id="name"
                placeholder="Insira o seu nome"
                autoComplete="name"
            />
        </div>
    );
};
export default InputName;
