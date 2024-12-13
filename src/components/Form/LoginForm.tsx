import React from 'react';
import InputEmail from './InputEmail';
import InputPassoword from './InputPassword';
import BtnSubmit from '../Button/BtnSubmit';
import BtnReset from '../Button/BtnReset';
import style from './Form.module.css';
import { Link } from 'react-router-dom';
import useSubmit from '../../hooks/useSubmit';
import getDatasForm from '../../utils/getDataForm';
import { Alert } from 'react-bootstrap';

const LoginForm: React.FC = () => {
	interface ParamsFormLogin {
		email: string;
		password: string;
	}

	const [datasUser, setData] = React.useState<ParamsFormLogin | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<ParamsFormLogin>(e);
		setData(datasUser);
	};
	const [datas, error, loading] = useSubmit<ParamsFormLogin>(
		'https://clube-series-api.onrender.com/login',
		datasUser as ParamsFormLogin,
	);
	return (
		<section className={style.container_form}>
			{error && (
				<Alert color="danger" dismissible>
					{error.message}
				</Alert>
			)}
			{!error && datas?.ok && (
				<Alert color="success" dismissible>
					{datas.status}
				</Alert>
			)}
			<h2 className={style.title}>Faça o Login e Aproveite o Cinema em Casa:</h2>
			<form onSubmit={(e) => handleSubmit(e)} className={style.form}>
				<InputEmail />
				<InputPassoword />
				<div className={style.btn_group}>
					<BtnSubmit content={`${loading ? 'carregando...' : 'Entrar'}`} />
					<BtnReset content="Cancelar" />
					<Link
						title="Crie uma conta para Aproveitar os conteudos"
						className={style.create_account}
						to="/signup"
					>
						Criar a Conta
					</Link>
				</div>
			</form>
		</section>
	);
};
export default LoginForm;
