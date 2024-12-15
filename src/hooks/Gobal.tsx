import React, { ReactNode } from 'react';
import { Context, ValuesParams } from './Context';
import { useFetch } from './useFetch';

interface ParamsGlobal {
	children: ReactNode;
}

const Global: React.FC<ParamsGlobal> = ({ children }) => {
	const datas: ValuesParams | null = useFetch('/json/db.json');
	if (datas) {
		return (
			<Context.Provider
				value={{ ...datas }}
			>
				{children}
			</Context.Provider>
		);
	}
};

export default Global;
