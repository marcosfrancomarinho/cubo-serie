import React from 'react';
import InputEmail from './InputEmail';
import InputPassoword from './InputPassword';
import BtnSubmit from '../Button/BtnSubmit';
import BtnReset from '../Button/BtnReset';
import style from './Form.module.css';
import InputName from './InputName';

const RegisterForm: React.FC = () => {
    return (
        <section className={style.container_form}>
            <h2 className={style.title}>
                Faça o Cadastro e Aproveite o Cinema em Casa:
            </h2>
            <form className={style.form}>
                <InputName />
                <InputEmail />
                <InputPassoword />
                <div className={style.btn_group}>
                    <BtnSubmit content="Cadastrar" />
                    <BtnReset content="Cancelar" />
                </div>
            </form>
        </section>
    );
};
export default RegisterForm;
