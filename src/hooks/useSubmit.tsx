import React from 'react';
import { setTokenLocalStorage } from '../utils/localStorage';

interface ParamsUseSubmit {
	ok: boolean;
	status: string;
}

function useSubmit<T>(
	url: string,
	datasUser: T,
): [ParamsUseSubmit | null, Error | null, boolean] {
	const [datas, setDatas] = React.useState<ParamsUseSubmit | null>(null);
	const [error, setError] = React.useState<Error | null>(null);
	const [loading, setLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		const submitData = async () => {
			if (!datasUser) return;

			const options: RequestInit = {
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
				body: JSON.stringify(datasUser),
			};
			try {
				setLoading(true);
				const response = await fetch(url, options);
				const token = response.headers.get('authorization') as string;
				setTokenLocalStorage(token);
				const json = await response.json();
				if (!response.ok) throw new Error(json.error);
				setDatas(json as ParamsUseSubmit);
			} catch (error) {
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};

		submitData();
	}, [url, datasUser]);

	return [datas, error, loading];
}

export default useSubmit;
