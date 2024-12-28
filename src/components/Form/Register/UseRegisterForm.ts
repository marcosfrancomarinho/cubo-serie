import { useSubmit } from '../../../hooks/useSubmit';
import getDatasForm from '../../../utils/getDataForm';
import { IFormRegister } from './RegisterForm.interface';
import React from 'react';

export const useRegisterForm = () => {
	const [datasUser, setData] = React.useState<IFormRegister | null>(null);
	const [hide, setHide] = React.useState<boolean>(true);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<IFormRegister>(e);
		setData(datasUser);
		setHide(true);
	};
	const [datas, error, loading, abortRequest] = useSubmit<IFormRegister>(
		'signup',
		datasUser as IFormRegister,
	);
	return {
		datas,
		error,
		loading,
		abortRequest,
		hide,
		handleSubmit,
		datasUser,
		setHide,
	};
};
