import React from 'react';

export interface ParamsUseConnect {
	isLogin: boolean;
	status: string;
}

const connect = async (
	url: string,
	setLogin: React.Dispatch<React.SetStateAction<boolean>>,
	token: string | undefined,
): Promise<void> => {
	const options: RequestInit = {
		headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
		method: 'POST',
	};
	try {
		const response = await fetch(url, options);
		const json: ParamsUseConnect = await response.json();
		if (!response.ok) throw new Error((json as unknown as Error).message);
		setLogin(json.isLogin);
	} catch (error) {
		console.warn(error);
		setLogin(false);
	}
};
export default connect;
