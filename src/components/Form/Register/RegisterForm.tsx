import React from 'react';
import { useRegisterForm } from './UseRegisterForm';
import { Navigate } from 'react-router-dom';
import style from '../../../styles/Form.module.css';
import BtnReset from '../../Button/Reset/BtnReset';
import BtnSubmit from '../../Button/Submit/BtnSubmit';
import BtnRedirection from '../../Button/Redirection/BtnRedirection';
import Spinner from '../../Spinner/Spinner';
import Alert from '../../Alert/Alert';
import InputName from '../../Input/Name/InputName';
import InputEmail from '../../Input/Email/InputEmail';
import InputPassword from '../../Input/Password/InputPassword';

const RegisterForm: React.FC = () => {
	const {
		abortRequest,
		datas,
		error,
		handleSubmit,
		hide,
		loading,
		datasUser,
		setHide,
	} = useRegisterForm();
	if (datas && !error && datasUser)
		return (
			<Navigate
				replace
				state={{ email: datasUser.email } as { email: string }}
				to="/login"
			></Navigate>
		);
	return (
		<section className={style.container_form}>
			<h2 className={style.title}>
				Faça o Cadastro e Aproveite o Cinema em Casa:
			</h2>
			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
				className={style.form}
			>
				<InputName />
				<InputEmail/>
				<InputPassword />
				<div className={style.btn_group}>
					<BtnSubmit
						disabled={loading}
						content={loading ? <Spinner /> : 'Cadastrar'}
					/>
					<BtnReset onClick={abortRequest} content="Cancelar" />
					<BtnRedirection path="/login">Faça o Login</BtnRedirection>
				</div>
			</form>
			{error && hide && (
				<Alert hide={hide} setHide={setHide}>
					{error.message}
				</Alert>
			)}
		</section>
	);
};

export default RegisterForm;
