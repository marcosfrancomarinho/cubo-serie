import React from 'react';
import style from './Input.module.css';

const InputPassword: React.FC = () => {
	return (
		<div className={style.input_container}>
			<label className={style.label} htmlFor="password">
				Senha:
			</label>
			<input
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
