import { ParamsUseSubmit } from "../../../hooks/use.submit";

export interface IFormLogin {
	email: string;
	password: string;
}
export interface IUseFormLogin {
	datas: ParamsUseSubmit | null;
	error: Error | null;
	loading: boolean;
	abortRequest: () => void;
	hide: boolean;
	emailLocation: string | undefined;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	setHide: React.Dispatch<React.SetStateAction<boolean>>;
}
