import React from 'react';

interface ParamsUseSubmit {
	ok: boolean;
	status: string;
	name: string;
	token: string;
}

function useSubmit<T>(
	path: string,
	datasUser: T | null,
): [ParamsUseSubmit | null, Error | null, boolean, () => void] {
	const [datas, setDatas] = React.useState<ParamsUseSubmit | null>(null);
	const [error, setError] = React.useState<Error | null>(null);
	const [loading, setLoading] = React.useState<boolean>(false);

	const controller = React.useRef<AbortController | null>(null);

	const abortRequest = React.useCallback(() => {
		if (controller.current) {
			controller.current.abort();
		}
	}, []);
	React.useEffect(() => {
		if (!datasUser) return;
		
		controller.current = new AbortController();
		const signal = controller.current.signal;

		const submitData = async () => {
			const options: RequestInit = {
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
				body: JSON.stringify(datasUser),
				signal,
			};
			try {
				setLoading(true); 
				setError(null); 
				setDatas(null);

				const response = await fetch(
					`https://clube-series-api.onrender.com/${path}`,
					options,
				);

				const token = response.headers.get('authorization') || '';
				const json = await response.json();

				if (!response.ok) {
					const message =
						json.error || `Erro ao realizar a requisição: ${response.status}`;
					throw new Error(message);
				}

				setDatas({ ...json, token } as ParamsUseSubmit);
			} catch (error) {
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};

		submitData();

		return () => {
			abortRequest();
		};
	}, [path, datasUser, abortRequest]); 

	return [datas, error, loading, abortRequest];
}

export default useSubmit;
