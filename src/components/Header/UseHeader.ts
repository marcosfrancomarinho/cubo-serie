import React from 'react';
import { IUseHeader } from './Header.iterface';

export const useHeader = (): IUseHeader => {
	const [visibility, setVisibility] = React.useState<boolean>(false);
	return { visibility, setVisibility };
};
