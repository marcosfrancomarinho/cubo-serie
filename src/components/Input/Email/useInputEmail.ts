import React from 'react';
import { ValuesParams, Context } from '../../../hooks/Context';

export const useInputEmail = (value: string) => {
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
