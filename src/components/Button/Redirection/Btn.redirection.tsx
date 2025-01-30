import React from 'react';
import { Link } from 'react-router-dom';
import style from './Btn.redirection.module.css';
import { IBtnRedirecion } from './Btn.redirection.type';

const BtnRedirection: React.FC<IBtnRedirecion> = ({ children, path }) => {
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
