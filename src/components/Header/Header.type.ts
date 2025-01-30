import React from 'react';

export interface IHeader {
	title: string;
	menu: string[];
}
export interface IUseHeader {
	visibility: boolean;
	setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
