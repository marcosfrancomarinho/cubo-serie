import { ParamsUseSubmit } from "../../../hooks/use.submit";

export interface IFormRegister {
	name: string;
	email: string;
	password: string;
}

export interface IUseRegisterForm {
	datas: ParamsUseSubmit | null;
	error: Error | null;
	loading: boolean;
	abortRequest: () => void;
	hide: boolean;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	datasUser: IFormRegister | null;
	setHide: React.Dispatch<React.SetStateAction<boolean>>;
}
