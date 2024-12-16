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

	// Função para abortar a requisição
	const abortRequest = React.useCallback(() => {
		if (controller.current) {
			controller.current.abort();
		}
	}, []);

	React.useEffect(() => {
		if (!datasUser) return;

		// Criar novo controller para cada nova requisição
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
				setLoading(true); // Inicia o estado de loading
				setError(null); // Reseta o erro anterior
				setDatas(null); // Limpa os dados anteriores

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
				// Caso tenha erro, setar o erro
				setError(error as Error);
			} finally {
				// Garanta que o loading seja desmarcado independentemente do resultado
				setLoading(false);
			}
		};

		submitData();

		return () => {
			// Limpar o controller se o componente for desmontado ou a requisição for abortada
			abortRequest();
		};
	}, [path, datasUser, abortRequest]); // Remover a dependência de isAborted

	return [datas, error, loading, abortRequest];
}

export default useSubmit;
