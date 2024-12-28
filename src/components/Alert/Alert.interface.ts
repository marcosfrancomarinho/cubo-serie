import { ReactNode } from 'react';

export interface IAlert {
	children: ReactNode;
	hide: boolean;
	setHide: React.Dispatch<React.SetStateAction<boolean>>;
}
