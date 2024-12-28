import React from 'react';
import style from '../../../styles/Btn.module.css';
import { IBtnReset } from './BtnReset.interface';

const BtnReset: React.FC<IBtnReset> = ({ content, onClick }) => {
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
