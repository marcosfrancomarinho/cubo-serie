import React from 'react';

export const useHeader = () => {
	const [visibility, setVisibility] = React.useState<boolean>(false);
	return { visibility, setVisibility };
};
