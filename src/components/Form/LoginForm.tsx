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
	const [datas, error, loading] = useSubmit<ParamsFormLogin>(
		'login',
		datasUser as ParamsFormLogin,
	);
	React.useEffect(() => {
		if (datas) setTokenLocalStorage(datas.token);
	}, [datas]);
	if (datas && !error) return <Navigate to="/test"></Navigate>;
	return (
		<section className={style.container_form}>
			<h2 className={style.title}>Faça o Login e Aproveite o Cinema em Casa:</h2>
			<form onSubmit={(e) => handleSubmit(e)} className={style.form}>
				<InputEmail value={emailLocation} />
				<InputPassword />
				<div className={style.btn_group}>
					<BtnSubmit content={loading ? <Spinner /> : 'Entrar'} />
					<BtnReset content="Cancelar" />
					<BtnRedirection path="/signup">Criar conta</BtnRedirection>
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
export default LoginForm;
