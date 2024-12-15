import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './Btn.redirection.module.css';

interface ParamsBtnRedirecion {
	path: string;
	children: ReactNode;
}

const BtnRedirection: React.FC<ParamsBtnRedirecion> = ({ children, path }) => {
	return (
		<Link
			title={`${children} para proveitar os conteudos`}
			className={style.create_account}
			to={path}
		>
			{children}
		</Link>
	);
};
export default BtnRedirection;
