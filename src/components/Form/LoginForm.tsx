import React from 'react';
import InputEmail from './InputEmail';
import InputPassoword from './InputPassword';
import BtnSubmit from '../Button/BtnSubmit';
import BtnReset from '../Button/BtnReset';
import style from './Form.module.css';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
    return (
        <section className={style.container_form}>
            <h2 className={style.title}>
                Faça o Login e Aproveite o Cinema em Casa.
            </h2>
            <form className={style.form}>
                <InputEmail />
                <InputPassoword />
                <div className={style.btn_group}>
                    <BtnSubmit content="Entrar" />
                    <BtnReset content="Cancelar" />
                    <Link
                        title="Crie uma conta para Aproveitar os conteudos"
                        className={style.create_account}
                        to="/siginup"
                    >
                        Criar a Conta
                    </Link>
                </div>
            </form>
        </section>
    );
};
export default LoginForm;
