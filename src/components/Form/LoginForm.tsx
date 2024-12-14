import React from 'react';
import BtnSubmit from '../Button/BtnSubmit';
import BtnReset from '../Button/BtnReset';
import style from './Form.module.css';
import { Link } from 'react-router-dom';
import useSubmit from '../../hooks/useSubmit';
import getDatasForm from '../../utils/getDataForm';
import InputEmail from '../Input/InputEmail';
import InputPassword from '../Input/InputPassword';
import { setTokenLocalStorage } from '../../utils/localStorage';
import { Context, ValuesParams } from '../../hooks/Context';
import { getFirstName } from '../../utils/formart';

const LoginForm: React.FC = () => {
	interface ParamsFormLogin {
		email: string;
		password: string;
	}

	const [datasUser, setData] = React.useState<ParamsFormLogin | null>(null);
	const { setLogin, setNameUser } = React.useContext(Context) as ValuesParams;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<ParamsFormLogin>(e);
		setData(datasUser);
	};
	const [datas, error, loading] = useSubmit<ParamsFormLogin>(
		'https://clube-series-api.onrender.com/login',
		datasUser as ParamsFormLogin,
	);
	React.useEffect(() => {
		if (!datas) return;
		setTokenLocalStorage(datas.token);
		setLogin(datas.ok);
		setNameUser(getFirstName(datas.name));
	}, [datas, setLogin, setNameUser]);
	return (
		<section className={style.container_form}>
			{error && <h1>{error.message}</h1>}
			{!error && datas?.ok && <h1>{datas.status}</h1>}
			<h2 className={style.title}>Faça o Login e Aproveite o Cinema em Casa:</h2>
			<form onSubmit={(e) => handleSubmit(e)} className={style.form}>
				<InputEmail />
				<InputPassword />
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
