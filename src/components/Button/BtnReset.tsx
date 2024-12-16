import React from 'react';
import style from './Btn.module.css';

interface ParamsBtnReset {
	content: string;
	onClick?: () => void;
}

const BtnReset: React.FC<ParamsBtnReset> = ({ content, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${style.btn} ${style.btn_reset}`}
			type="reset"
		>
			{content}
		</button>
	);
};

export default BtnReset;
