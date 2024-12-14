import React, { ReactNode } from 'react';
import { Context, ValuesParams } from './Context';
import { useFetch } from '../utils/useFetch';

interface ParamsGlobal {
	children: ReactNode;
}

const Global: React.FC<ParamsGlobal> = ({ children }) => {
	const [login, setLogin] = React.useState<boolean>(false);
	const [nameUser, setNameUser] = React.useState<string>('');

	const datas: ValuesParams | null = useFetch('/json/db.json');
	if (datas) {
		return (
			<Context.Provider
				value={{ ...datas, setLogin, login, setNameUser, nameUser }}
			>
				{children}
			</Context.Provider>
		);
	}
};

export default Global;
