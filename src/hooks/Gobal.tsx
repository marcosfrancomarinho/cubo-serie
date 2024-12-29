import React, { ReactNode } from 'react';
import { Context, ValuesParams } from './Context';
import { useFetch } from './useFetch';

interface ParamsGlobal {
	children: ReactNode;
}

const Global: React.FC<ParamsGlobal> = ({ children }) => {
	const datas: ValuesParams | null = useFetch(
		'https://clube-series-api.onrender.com',
	);
	const [elementInputPassword, setElementInputPassword] =
		React.useState<HTMLInputElement | null>(null);
	return (
		<Context.Provider
			value={{ ...datas!, elementInputPassword, setElementInputPassword }}
		>
			{children}
		</Context.Provider>
	);
};

export default Global;
