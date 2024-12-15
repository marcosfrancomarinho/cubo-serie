import React from 'react';
import InputEmail from '../Input/InputEmail';
import InputPassword from '../Input/InputPassword';
import BtnSubmit from '../Button/BtnSubmit';
import BtnReset from '../Button/BtnReset';
import style from './Form.module.css';
import InputName from '../Input/InputName';
import getDatasForm from '../../utils/getDataForm';
import useSubmit from '../../hooks/useSubmit';
import BtnRedirection from '../Button/Btn.redirection';
import Alert from '../Alert/Alert';
import { Navigate } from 'react-router-dom';

interface ParamsFormRegister {
	name: string;
	email: string;
	password: string;
}

const RegisterForm: React.FC = () => {
	const [datasUser, setData] = React.useState<ParamsFormRegister | null>(null);
	const [hide, setHide] = React.useState<boolean>(true);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<ParamsFormRegister>(e);
		setData(datasUser);
		setHide(true);
	};

	const [datas, error, loading] = useSubmit<ParamsFormRegister>(
		'signup',
		datasUser as ParamsFormRegister,
	);

	if (datas && !error && datasUser)
		return (
			<Navigate replace state={{ email: datasUser.email }} to="/login"></Navigate>
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
				<InputEmail />
				<InputPassword />
				<div className={style.btn_group}>
					<BtnSubmit content={`${loading ? 'carregando...' : 'Cadastrar'}`} />
					<BtnReset content="Cancelar" />
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
