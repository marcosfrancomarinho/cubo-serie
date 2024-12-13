import React from 'react';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import BtnSubmit from '../Button/BtnSubmit';
import BtnReset from '../Button/BtnReset';
import style from './Form.module.css';
import InputName from './InputName';
import getDatasForm from '../../utils/getDataForm';
import useSubmit from '../../hooks/useSubmit';

const RegisterForm: React.FC = () => {
	interface ParamsFormRegister {
		name: string;
		email: string;
		password: string;
	}

	const [datasUser, setData] = React.useState<ParamsFormRegister | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<ParamsFormRegister>(e);
		setData(datasUser);
	};

	const [datas, error, loading] = useSubmit<ParamsFormRegister>(
		'https://clube-series-api.onrender.com/signup',
		datasUser as ParamsFormRegister,
	);
	return (
		<section className={style.container_form}>
			{error && <h1>error existente</h1>}
			{!error && datas?.ok && datas.status}
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
				</div>
			</form>
		</section>
	);
};

export default RegisterForm;
