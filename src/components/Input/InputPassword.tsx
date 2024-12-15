import React from 'react';
import style from './Input.module.css';
import { Context, ValuesParams } from '../../hooks/Context';

const InputPassword: React.FC = () => {
	const { setElementInputPassword } = React.useContext(Context) as ValuesParams;
	const elementInputPassword = React.useRef<HTMLInputElement | null>(null);
	React.useEffect(() => {
		setElementInputPassword(elementInputPassword.current);
	});
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
