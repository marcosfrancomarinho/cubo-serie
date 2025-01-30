import { useSubmit } from "../../../hooks/use.submit";
import getDatasForm from "../../../utils/get.data.form";
import { IFormRegister, IUseRegisterForm } from "./Register.form.type";
import React from "react";

export const useRegisterForm = (): IUseRegisterForm => {
	const [datasUser, setData] = React.useState<IFormRegister | null>(null);
	const [hide, setHide] = React.useState<boolean>(true);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const datasUser = getDatasForm<IFormRegister>(e);
		setData(datasUser);
		setHide(true);
	};
	const [datas, error, loading, abortRequest] = useSubmit<IFormRegister>("signup", datasUser as IFormRegister);
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
