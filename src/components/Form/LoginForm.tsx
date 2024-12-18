import React from 'react';
import BtnSubmit from '../Button/BtnSubmit';
import BtnReset from '../Button/BtnReset';
import style from './Form.module.css';
import useSubmit from '../../hooks/useSubmit';
import getDatasForm from '../../utils/getDataForm';
import InputEmail from '../Input/InputEmail';
import InputPassword from '../Input/InputPassword';
import { setTokenLocalStorage } from '../../utils/localStorage';
import BtnRedirection from '../Button/Btn.redirection';
import Alert from '../Alert/Alert';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

interface ParamsFormLogin {
	email: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const [datasUser, setData] = React.useState<ParamsFormLogin | null>(null);
	const [hide, setHide] = React.useState<boolean>(true);

	const location = useLocation();
	const emailLocation: string | undefined = location.state?.email;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<ParamsFormLogin>(e);
		setData(datasUser);
		setHide(true);
	};

	const [datas, error, loading, abortRequest] = useSubmit<ParamsFormLogin>(
		'login',
		datasUser,
	);


	React.useEffect(() => {
		if (datas) setTokenLocalStorage(datas.token);
	}, [datas]);

	if (datas && !error) return <Navigate to="/welcome" replace />;

	return (
		<section className={style.container_form}>
			<h2 className={style.title}>Faça o Login e Aproveite o Cinema em Casa:</h2>
			<form onSubmit={handleSubmit} className={style.form}>
				<InputEmail value={emailLocation} />
				<InputPassword />
				<div className={style.btn_group}>
					<BtnSubmit disabled={loading} content={loading ? <Spinner /> : 'Entrar'} />

					<BtnReset onClick={abortRequest} content="Cancelar" />
					<BtnRedirection path="/signup">Criar conta</BtnRedirection>
				</div>
			</form>

			{error && !loading && hide && (
				<Alert hide={hide} setHide={setHide}>
					{error.message || 'Erro desconhecido. Tente novamente mais tarde.'}
				</Alert>
			)}
		</section>
	);
};

export default LoginForm;
