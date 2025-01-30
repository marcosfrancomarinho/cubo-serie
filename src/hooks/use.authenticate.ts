import React from "react";
import { getTokenLocalStorage } from "../utils/local.storage";

interface UseAuthenticateResponse {
	isLogin: boolean;
	isLoading: boolean;
	error: string | null;
}

export const useAuthenticate = (path: string): UseAuthenticateResponse => {
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
				const response = await fetch(`https://clube-series-api.onrender.com/${path === "/" ? "" : path}`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`,
					},
					method: "POST",
				});
				const json = await response.json();
				if (!response.ok) throw new Error(json.error);
				setIsLogin(response.ok);
				setError(null);
			} catch (err: unknown) {
				setIsLogin(false);
				setError(err instanceof Error ? err.message : "Erro desconhecido");
				localStorage.removeItem("token");
			} finally {
				setIsLoading(false);
			}
		};
		verifyAuthentication();
	}, [path]);
	return { isLogin, isLoading, error };
};
