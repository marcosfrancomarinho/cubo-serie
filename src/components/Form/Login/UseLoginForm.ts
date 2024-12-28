import React from 'react';
import { IFormLogin, IUseFormLogin } from './LoginForm.interface';
import { useSubmit } from '../../../hooks/useSubmit';
import getDatasForm from '../../../utils/getDataForm';
import { useLocation } from 'react-router-dom';
import { setTokenLocalStorage } from '../../../utils/localStorage';

export const useFormLogin = (): IUseFormLogin => {
	const [datasUser, setData] = React.useState<IFormLogin | null>(null);
	const [hide, setHide] = React.useState<boolean>(true);
	const location = useLocation();
	const emailLocation: string | undefined = location.state?.email;
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<IFormLogin>(e);
		setData(datasUser);
		setHide(true);
	};
	const [datas, error, loading, abortRequest] = useSubmit<IFormLogin>(
		'login',
		datasUser,
	);
	React.useEffect(() => {
		if (datas) setTokenLocalStorage(datas.token);
	}, [datas]);
	return {
		datas,
		error,
		loading,
		abortRequest,
		hide,
		emailLocation,
		handleSubmit,
		setHide,
	};
};
