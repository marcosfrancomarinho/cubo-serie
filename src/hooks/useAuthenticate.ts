import React from 'react';
import { getTokenLocalStorage } from '../utils/localStorage';

interface UseAuthenticateResponse {
	isLogin: boolean;
	isLoading: boolean;
	error: string | null;
}

const useAuthenticate = (path: string): UseAuthenticateResponse => {
	const [isLogin, setIsLogin] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);
	React.useEffect(() => {
		const token = getTokenLocalStorage();
		if (!token) {
			setIsLogin(false);
			setIsLoading(false);
			return;
		}
		const verifyAuthentication = async (): Promise<void> => {
			setIsLoading(true);
			try {
				const response = await fetch(
					`https://clube-series-api.onrender.com/${path === '/' ? '' : path}`,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `${token}`,
						},
						method: 'POST',
					},
				);
				const json = await response.json();
				if (!response.ok) throw new Error(json.error);
				setIsLogin(json.isLogin);
				setError(null);
			} catch (err: unknown) {
				setIsLogin(false);
				setError(err instanceof Error ? err.message : 'Erro desconhecido');
			} finally {
				setIsLoading(false);
			}
		};
		verifyAuthentication();
	}, [path]);

	return { isLogin, isLoading, error };
};

export default useAuthenticate;
