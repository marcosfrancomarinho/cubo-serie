import React from 'react';
import style from './Input.module.css';

interface ParamsInputEmail {
	value?: string | undefined;
}

const InputEmail: React.FC<ParamsInputEmail> = ({ value }) => {
	const [email, setEmail] = React.useState(value || '');

	React.useEffect(() => {
		if (value) setEmail(value);
	}, [value]);

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
