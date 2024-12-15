import React from 'react';
import style from './Fallback.module.css';

interface FallbackProps {
	message?: string;
	showSpinner?: boolean;
}

const Fallback: React.FC<FallbackProps> = ({
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
