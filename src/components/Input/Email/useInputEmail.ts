import React from 'react';
import { ValuesParams, Context } from '../../../hooks/Context';
import { IUseInputEmail } from './InputEmail.interface';

export const useInputEmail = (value: string): IUseInputEmail => {
	const [email, setEmail] = React.useState(value || '');
	const { elementInputPassword } = React.useContext(Context) as ValuesParams;
	React.useEffect(() => {
		if (value && elementInputPassword) {
			setEmail(value);
			elementInputPassword.focus();
		}
	}, [value, elementInputPassword]);
	return { email, setEmail };
};
