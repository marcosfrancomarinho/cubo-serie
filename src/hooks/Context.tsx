import React from 'react';

export interface ValuesParams {
	menu: {
		public: string[];
		private: string[];
		title: string;
	};
	images: {
		url: string;
		title: string;
	}[];
	footer: {
		url: string;
		redes: string;
		id: number;
	}[];
	elementInputPassword: HTMLInputElement | null;
	setElementInputPassword: React.Dispatch<
		React.SetStateAction<HTMLInputElement | null>
	>;
}
export const Context = React.createContext<ValuesParams | null>(null);
