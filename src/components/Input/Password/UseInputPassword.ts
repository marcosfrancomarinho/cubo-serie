import React from 'react';
import { Context, ValuesParams } from '../../../hooks/Context';
import { IUseInputPassword } from './InputPassowd.interface';

export const useInputPassword = (): IUseInputPassword => {
	const { setElementInputPassword } = React.useContext(Context) as ValuesParams;
	const elementInputPassword = React.useRef<HTMLInputElement | null>(null);
	React.useEffect(() => {
		setElementInputPassword(elementInputPassword.current);
	});

	return { elementInputPassword };
};
