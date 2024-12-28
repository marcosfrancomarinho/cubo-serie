import React from 'react';
import style from '../../../styles/Input.module.css';
import { useInputPassword } from './UseInputPassword';

const InputPassword: React.FC = () => {
	const { elementInputPassword } = useInputPassword();
	return (
		<div className={style.input_container}>
			<label className={style.label} htmlFor="password">
				Senha:
			</label>
			<input
				ref={elementInputPassword}
				className={style.input}
				type="password"
				name="password"
				id="password"
				placeholder="Insira a Senha"
				autoComplete="current-password"
			/>
		</div>
	);
};
export default InputPassword;
