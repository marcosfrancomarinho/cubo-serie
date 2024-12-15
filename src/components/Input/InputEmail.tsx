import React from 'react';
import style from './Input.module.css';
import { Context, ValuesParams } from '../../hooks/Context';

interface ParamsInputEmail {
	value?: string | undefined;
}

const InputEmail: React.FC<ParamsInputEmail> = ({ value }) => {
	const [email, setEmail] = React.useState(value || '');
	const { elementInputPassword } = React.useContext(Context) as ValuesParams;

	React.useEffect(() => {
		if (value && elementInputPassword) {
			setEmail(value);
			elementInputPassword.focus();
		}
	}, [value, elementInputPassword]);

	return (
		<div className={style.input_container}>
			<label className={style.label} htmlFor="email">
				Email:
			</label>
			<input
				className={style.input}
				type="email"
				name="email"
				id="email"
				placeholder="Insira o e-mail"
				autoComplete="email"
				onChange={(e) => setEmail(e.currentTarget.value)}
				value={email}
			/>
		</div>
	);
};

export default InputEmail;
