import React from 'react';
import style from '../../../styles/Input.module.css';
import { IInputEmail } from './InputEmail.interface';
import { useInputEmail } from './useInputEmail';

const InputEmail: React.FC<IInputEmail> = ({ value }) => {
	const { email, setEmail } = useInputEmail(value!);
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
