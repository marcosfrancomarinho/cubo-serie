import React from 'react';

export interface IInputEmail {
	value?: string;
}
export interface IUseInputEmail {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
}
