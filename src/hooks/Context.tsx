import React from 'react';

export interface ValuesParams {
	title: string;
	menu: string[];
	images: {
		url: string;
		title: string;
	}[];
	footer: {
		url: string;
		redes: string;
		id: number;
	}[];
	setLogin: React.Dispatch<React.SetStateAction<boolean>>;
	login: boolean;
	nameUser: string;
	setNameUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = React.createContext<ValuesParams | null>(null);
