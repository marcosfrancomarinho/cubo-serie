import React from 'react';
import style from './Fallback.module.css';
import { IFallback } from './Fallback.interface';

const Fallback: React.FC<IFallback> = ({
	message = 'Carregando...',
	showSpinner = true,
}) => {
	return (
		<div className={style.fallback}>
			{showSpinner && <div className={style.spinner}></div>}
			<p>{message}</p>
		</div>
	);
};

export default Fallback;
